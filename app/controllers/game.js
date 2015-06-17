import Ember from 'ember';

export default Ember.Controller.extend({
  esrbs: ['E', 'T', 'M'],
  isEditing: false,
  actions: {
    deleteGame: function() {
      this.get('model').destroyRecord();
      this.transitionTo('games');
    },
    editGame: function() {
      this.set('isEditing', true);
    },
    updateGame: function() {
      this.set('isEditing', false);
      this.get('model').save();
    }
  }
});
