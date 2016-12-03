// Expose service configurations to application
module.exports = {
	facebookAuth: {
	    clientID: '403282983336453',
	    clientSecret: '2f8b4bd779c49a5c43d1f2a2ad045612',
	    callbackURL: 'http://localhost:8000/auth/facebook/callback',
	    profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'
  	},
};
