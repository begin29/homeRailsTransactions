import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  tags_money_transactions: DS.hasMany('tag-money-transaction'),
  money_transactions: function() {
    return this.get('tags_money_transactions').getEach('money_transaction');
  }.property('tags_money_transactions.@each.relationshipsLoaded')
});