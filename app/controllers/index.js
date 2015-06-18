import Ember from 'ember';

export default Ember.Controller.extend({
  esrbs: ['E', 'T', 'M'],
  openSearchByESRB: false,
  matchedGames: [],
  actions: {
    openSearchByESRB: function() {
      this.set('openSearchByESRB', true);
    },
    searchByESRB: function() {
      this.set('openSearchByESRB', false);
      var matchThis = this.get('esrb');
      var matchGamesCopy = this.matchedGames;
      this.model.forEach(function(game) {
        if(game.get('esrb') === matchThis) {
          matchGamesCopy.pushObject(game);
        }
      });
      this.setProperties('matchedGames', matchGamesCopy)
    }
    //**this process is in development, could not finish by the end of day**
    // openSearchByRating: function() {
    //   this.set('openSearchByRating', true);
    // },
    // searchByRating: function() {
    //   this.set('openSearchByRating', false);
    //   var matchThis = this.get('rating');
    //   var matchGamesCopy = this.matchedGames;
    //   this.model.forEach(function(game) {
    //     if(game.get('rating') === matchThis) {
    //       matchGamesCopy.pushObject(game);
    //     }
    //   });
    //   this.setProperties('matchedGames', matchGamesCopy)
    // }
  }
});
