import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('games', function() {
    this.route('new');
  });
  this.resource('game', {path: 'games/:game_id'}, function(){
    this.resource('reviews');
  });
  this.resource('review', {path: 'reviews/:review_id'});
  this.resource('giantbomb', {path: 'giantbomb/:gbgame'});
  this.resource('gbgame', {path: 'giantbomb/:gbgame_id'});
});

export default Router;
