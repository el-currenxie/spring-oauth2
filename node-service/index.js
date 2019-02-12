const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const customOauthMiddleware = require('./customOauthMiddleware');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.get('/', (req, res) => res.json({'yay': 'Hello World!'}));
app.get('/info',customOauthMiddleware,  async (req, res) => {
  let url = "http://localhost:8080/api/accounts/account";
  let options = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "authorization": "Bearer " + req.accessToken
    },
    url: url
  };
  let axiosPromise = await axios(options);
  res.json(axiosPromise.data)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
