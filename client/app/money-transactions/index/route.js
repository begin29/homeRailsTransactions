import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      money_transactions: this.store.find('money_transaction'),
      codes: this.store.find('tag')
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
      // modalName => money-transactions/edit
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
    },

    showContextMenu: function(tag){
      // set variable for tag-contex-menu
      tag.set('showedContext', true);
      this.set('curTag', tag);
      return this.render('money-transactions/tag-contex-menu', {
        into: 'money_transactions/index',
        outlet: 'tagContextMenu'
      });
    },

    setupController: function(controller, model) {
      controller.set("codes", model.codes);
    }
  }

});