import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['game'],
  actions: {
    addReview: function() {
      var newReview = this.store.createRecord('review', {
        title: this.get('title'),
        reviewer: this.get('reviewer'),
        rating: this.get('rating'),
        pros: this.get('pros'),
        cons: this.get('cons'),
        details: this.get('details')
      });
      newReview.save();

      var game = this.get('controllers.game.model');
      game.get('reviews').pushObject(newReview);
      game.save();

      this.setProperties({
        title:'',
        rating: '',
        reviewer: '',
        pros: '',
        details: '',
        cons: ''
      });

      this.transitionToRoute('game', game.id);
    }
  }
});
