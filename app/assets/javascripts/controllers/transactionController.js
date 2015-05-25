 // single transaction controller
App.TransactionController = Ember.Controller.extend({

  // editMode / deleteMode properties are used in the user template
  // we use them to manage css transitions when entering and exiting the edit route
  // see also the TransactionCreateAndEditRoute for more
  editMode: false,

  deleteMode: false,

  actions: {
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      // delete a transaction
      this.get('model').deleteRecord();
      this.get('model').save();
      // then transition to the TransactionsRoute
      this.transitionToRoute('transaction');
      // set deleteMode back to false
      this.set('deleteMode', false);
    }
  },
  edit: function(){
    console.log('TransactionController#edit');
    this.setProperties({
      'editMode': true,
      'deleteMode': false
    });
    this.transitionToRoute('transitions.edit');
  }
});

// single transaction edit form controller
App.TransactionsEditController = Ember.Controller.extend({
  actions: {
    save: function(){
      console.log('TransactionEditController#save');
      // var transaction = this.get('model');
      this.get('model').set('creationDate', new Date());
      var newTransaction = this.store.createRecord('transaction', this.get('model'));
      newTransaction.save();
      this.transitionToRoute('transaction', transaction);
    }
  }
});