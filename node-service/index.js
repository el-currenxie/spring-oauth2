const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

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
let accessToken;
async function prepareToken() {
  try {
    const result = await oauth2.clientCredentials.getToken();
    return await oauth2.accessToken.create(result);
  } catch(error) {
    console.log('Access Token error', error.message);
  }
}

async function createApp(){

  accessToken = await prepareToken();

  app.get('/', (req, res) => res.json({'yay': 'Hello World!'}));
  app.get('/info', (req, res) => {
    if (accessToken) {
      let url = "http://localhost:8080/api/accounts/account";

      let options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": "Bearer " + accessToken.token.access_token
        },
        uri: url
      };

      request(options,  (error, response, body) => {
        res.json(JSON.parse(body));
      });
    } else {
      res.json({err:"Not logged in"});
    }
  });

  app.listen(port, () => console.log(`Listening on port ${port}`))
}

createApp().catch(error => {
  console.log("error", error)
});
