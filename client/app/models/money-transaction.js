import DS from "ember-data";

export default DS.Model.extend({
  description: DS.attr('string'),
  price: DS.attr('number'),
  is_income: DS.attr('boolean'),
  tags_money_transactions: DS.hasMany('tag-money-transaction'),
  tags: function(){
    return this.get('tags_money_transactions').getEach('tag');
  }.property('tags_money_transactions.@each.relationshipsLoaded'),

  listOfTags: function(){
    return this.get('tags').getEach('name');
  }.property('tags.[]')
});