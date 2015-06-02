import Ember from 'ember';

export default Ember.Controller.extend({
  money_transaction: function(){
    return this.store.createRecord('money-transaction');
  }.property(),

  actions: {
    saveTransaction: function() {
      debugger
      this.get('money_transaction').save().then(function() {
        console.log("save successful");
        this.transitionToRoute('money_transactions');
      }.bind(this), function(error) {
        console.log(error);
      });
    },

    cancel: function() {
      this.transitionToRoute('rcruds');
    }
  }
});