import Ember from 'ember';

export default Ember.Controller.extend({
  money_transaction: function(){
    return this.store.createRecord('money-transaction');
  }.property(),

  actions: {
    saveTransaction: function() {
      this.get('money_transaction').save().then(function() {
        // it works only once
        // this.set('money_transaction', '');
        this.transitionToRoute('money_transactions');
      }.bind(this), function(error) {
        console.log(error);
      });
    },

    cancel: function() {
      this.transitionToRoute('money_transactions');
    }
  }
});