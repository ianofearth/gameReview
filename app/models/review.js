import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  reviewer: DS.attr('string'),
  rating: DS.attr('number'),
  pros: DS.attr('string'),
  cons: DS.attr('string'),
  details: DS.attr('string'),
  game: DS.belongsTo('game', {async: true})
});
