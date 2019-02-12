let accessTokenObj = null;

module.exports = async (req, res, next) => {
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
  if (accessTokenObj !== null) {
    console.log(accessTokenObj.token.access_token, accessTokenObj.expired());
  }
  if (accessTokenObj === null || accessTokenObj.expired()) {
    console.log("expired or undefined");
    try {
      const result = await oauth2.clientCredentials.getToken();
      accessTokenObj = await oauth2.accessToken.create(result);
      req.accessToken = accessTokenObj.token.access_token;
      next()
    } catch (error) {
      console.log('Error refreshing access token: ', error.message);
    }
  } else {
    req.accessToken = accessTokenObj.token.access_token;
    next()
  }
};