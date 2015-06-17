import Ember from 'ember';

export default Ember.Controller.extend({
  esrbs: ['E', 'T', 'M'],
  platforms: ['PC', 'XBOX One', 'PS4', 'Wii U'],
  actions: {
    addGame: function() {
      var newGame = this.store.createRecord('game', {
        title: this.get('title'),
        esrb: this.get('esrb'),
        genre: this.get('genre'),
        description: this.get('description'),
        platform: this.get('platform')
      });
      newGame.save();
      this.setProperties({
        title: '',
        esrb: '',
        genre: '',
        description: '',
        platform: ''
      });
    }
  }
});
