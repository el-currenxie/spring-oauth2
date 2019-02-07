const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
const port = process.env.PORT || 3000


app.use(bodyParser.json())


const credentials = {
    client: {
        id: '123',
        secret: '123'
    },
    auth: {
        tokenHost: 'http://localhost:8080'
    }
};
const oauth2 = require('simple-oauth2').create(credentials);
let assessToken
async function prepareRoute(assessToken) {
    try {
        const result = await oauth2.clientCredentials.getToken();
        console.log(result);
        accessToken = oauth2.accessToken.create(result);
        return accessToken
    } catch (error) {
        console.log('Access Token error', error.message);
    }
}

async function createApp(){
  await prepareRoute(assessToken)

    app.get('/', (req, res) => res.json({'yay': 'Hello World!'}))
    app.get('/info', (req, res) => {
        console.log(assessToken)
        if (assessToken) {
            var url = "http://localhost:8080/api/accounts/account";

            var options = {
                method: "GET",
                headers: {
                    "content-type": "application/json+fhir",
                    "authorization": "Bearer " + assessToken.access_token
                },
                uri: url
            };

            request(options, function (error, response, body) {
                res.json(body);
            });
        } else {
            res.json({err:"Not logged in"});
        }
    })


    app.listen(port, () => console.log(`Listening on port ${port}`))
}

createApp()
