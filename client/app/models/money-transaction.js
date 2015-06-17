import DS from "ember-data";

export default DS.Model.extend({
  description: DS.attr('string'),
  price: DS.attr('number'),
  is_income: DS.attr('boolean'),
  tags: DS.hasMany('tag'),

});