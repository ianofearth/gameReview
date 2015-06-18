import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchGiantBomb: function() {
      this.transitionToRoute('giantbomb', this.get('gbgame'));
    }
  }
});
