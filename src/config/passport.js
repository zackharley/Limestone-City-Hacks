var FacebookStrategy = require('passport-facebook').Strategy;

// Load user model
var User = require('/models/user');

// Load authentication variables
var configAuth = require('./auth');

// Passport
module.exports = function(passport) {

  // ========================================
  // Session Setup
  // -> For use in persistent login sessions
  // Serialise/unserialize users out of session
  // ========================================

  // Serialize user for session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // Deserialize user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // ========================================
  // Facebook authentication
  // ========================================

  var fbStrategy = configAuth.facebookAuth;
  // Pass requirements to callback - allows app to detect if user is logged in
  fbStrategy.passReqToCallback = true;
  passport.use(new FacebookStrategy(fbStrategy, function(req, token, refreshToken, profile, done) {

    // asynchronous
    process.nextTick(function() {
      // check if user is logged in
      if (!req.user) {
        User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

          // If error is found, return error
          if(err){
            return done(err);
          }

          // If user is found, ensure token is saved, and return user
          if(user){
            if(!user.facebook.token){
              user.facebook.token = token;
              user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
              user.facebook.email = (profile.emails[0].value || '').toLowerCase();

              user.save(function(err) {
                if(err){
                  return done(err);
                }

                return done(null, user);
              });
            }

            // Return the user
            return done(null, user);
          }
          // If no user is found, create new user
          else {
            var newUser = new User();
            // Assign user values
            newUser.facebook.id = profile.id;
            newUser.facebook.token = token;
            newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
            newUser.facebook.email = (profile.emails[0].value || '').toLowerCase();

            // Save new user
            newUser.save(function(err){
              if(err){
                return done(err);
              }

              return done(null, newUser);
            });
          }
        });

      }
      else {
        // Else, user exists and is logged in
        // Pull user out of session
        var user = req.user;
        user.facebook.id = profile.id;
        user.facebook.token = token;
        user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
        user.facebook.email = (profile.emails[0].value || '').toLowerCase();

        // Save user
        user.save(function(err) {
          if(err){
            return done(err);
          }

          return done(null, user);
        });
      }

    });

  }));

};
