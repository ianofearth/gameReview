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
  }
});
