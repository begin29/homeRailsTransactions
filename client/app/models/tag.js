import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr('string'),
  money_transactions: DS.hasMany('money_transaction')
});