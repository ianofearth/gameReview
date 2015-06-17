import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['game'],
  isEditing: false,
  actions: {
    editReview: function() {
      this.set('isEditing', true);
    },
    updateReview: function() {
      this.set('isEditing', false);
      this.get('model').save();
    },
    deleteReview: function() {
      var review = this.get('model');
      var game = this.get('controllers.game.model');
      game.get('reviews').removeObject(review);
      game.save();
      review.destroyRecord();

      this.transitionToRoute('game', game.id);
    }
  }
});
