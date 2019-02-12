const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const customOauthMiddleware = require('./customOauthMiddleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const asyncMiddleware = fn => (req, res, next) => Promise.resolve(fn(req, res, next = console.error)).catch(next);

app.get('/', customOauthMiddleware, (req, res) => res.json({'yay': 'Hello World!'}));
app.get('/info', customOauthMiddleware, asyncMiddleware(async (req, res) => {

  let url = "http://localhost:8080/api/accounts/account";
  let options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + req.accessToken
    },
    url: url
  };
  const getDataFromApi = async() => {
    try {
      return await axios(options);
    } catch (error) {
      console.error(error.message)
    }
  };
  let response = await getDataFromApi();
  res.json(response.data)

}));

app.listen(port, () => console.log(`Listening on port ${port}`));