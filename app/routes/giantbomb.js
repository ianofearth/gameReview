import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
  //   var url = "http://www.giantbomb.com/api/search/?api_key=d8e1f7cd034f6de60c15cd1f1a1e343906e7a417&format=json&resources=game&query=" + "fallout'";
  //   return Ember.$.getJSON(url)
  //   // .then(function(responseJSON) {
  //   //  var games = [];
  //   //  responseJSON.results.forEach(function(game) {
  //   //    games.push(game);
  //   //  });
  //   //  return games;
  // //  });
      return Ember.$.ajax ({
        type: 'GET',
        dataType: 'jsonp',
        crossDomain: true,
        jsonp: 'json_callback',
        url: 'http://www.giantbomb.com/api/search/?format=jsonp&api_key=d8e1f7cd034f6de60c15cd1f1a1e343906e7a417&query=' + params.gbgame,
        complete: function() {
            console.log('done');
        },
        success: function(data) {
            console.log(data);
        }
      }).then(function(responseJSON) {
        var games = [];
        responseJSON.results.forEach(function(game) {
          games.push(game);
        });
        return games;
    });
  }
});
