const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

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
    throw error;
  }
}

async function createApp(){

  app.get('/', (req, res) => res.json({'yay': 'Hello World!'}));
  app.get('/info', async (req, res) => {

    let errorJson, response, body, returnJson;

    if (typeof accessToken === 'undefined' || accessToken.expired()) {
      console.log("expired or undefined");
      try {
        accessToken = await prepareToken();
      } catch (error) {
        console.log('Error refreshing access token: ', error.message);
        errorJson = {"msg": "fail to fetch"};
        returnJson = errorJson;
      }
    }
    if (typeof errorJson === 'undefined') {
      let url = "http://localhost:8080/api/accounts/account";
      let options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "authorization": "Bearer " + accessToken.token.access_token
        },
        url: url
      };
      let axiosPromise = await axios(options);
      returnJson = axiosPromise.data
    }
    res.json(returnJson)
  });

  app.listen(port, () => console.log(`Listening on port ${port}`))
}

createApp().catch(error => {
  console.log("error", error)
});
