import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      tags: this.get('store').find('tag'),
      money_transactions: this.store.find('money_transaction')
    });
  },

  actions: {
    deleteTransaction: function(obj) {
      obj.deleteRecord();
      obj.save();
    },

    openNewTransaction: function(modalName) {
      var newTransaction = this.store.createRecord('money_transaction');
      this.controllerFor('money_transactions/new').set('model', newTransaction);
      return this.render(modalName, {
        into: 'money_transactions/index',
        outlet: 'newTransaction'
      });
    },

    closeTransactionForm: function(){
      return this.disconnectOutlet({
        parentView: 'money_transactions/index',
        outlet: 'newTransaction'
      });
    },

    editTransaction: function(transaction, modalName){
      var _this = this
      this.store.find('money_transaction', transaction.id ).then(
          function(val){
            _this.controllerFor('money_transactions/edit').set('model', val);
          }
        );

      return this.render(modalName, {
        into: 'money_transactions/index',
        outlet: 'newTransaction'
      });
    }
  }

});