/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'game-review',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebaseio.com http://www.giantbomb.com/api/search/",
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'font-src': "'self' http://www.giantbomb.com/api/search/",
      'img-src': "'self' http://www.giantbomb.com/api/search/",
      'style-src': "'self' 'unsafe-inline' http://www.giantbomb.com/api/search/",
      'frame-src': "'none' http://www.giantbomb.com/api/search/"
      },
    firebase: 'https://gamereview.firebaseio.com/',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
