// Expose service configurations to application
module.exports = {

  'facebookAuth' : {
    'clientID'        : 'your-client-id'
    'clientSecret'    : 'your-client-secret'
    'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    'profileURL'      : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
  },

};
