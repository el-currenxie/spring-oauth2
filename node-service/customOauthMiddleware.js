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
let accessTokenObj = null;

module.exports = async  (req, res, next) => {
  try {
    if (accessTokenObj !== null && accessTokenObj.expired()) {
      console.log("this token expired: ", accessTokenObj.token.access_token);
    }
    const result = await oauth2.clientCredentials.getToken();
    accessTokenObj =  await oauth2.accessToken.create(result);
    req.accessToken = accessTokenObj.token.access_token;
    next();
  } catch(error) {
    console.log('Error refreshing access token: ', error.message);
  }
};
