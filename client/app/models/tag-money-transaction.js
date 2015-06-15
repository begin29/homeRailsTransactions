import DS from "ember-data";

export default DS.Model.extend({
  money_transaction: DS.belongsTo('money-transaction'),
  tag: DS.belongsTo('tag'),
  relationshipsLoaded: function(){
    console.log('relationshipsLoaded');
    return this.get('tag.isLoaded') && this.get('money-transaction.isLoaded');
  }.property('tag.isLoaded', 'money-transaction.isLoaded')
});