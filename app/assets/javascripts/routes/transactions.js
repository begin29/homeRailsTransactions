// get all transactions for transactions page
App.TransactionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('transaction');
  }
});

// root url always /#/transactions
App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('transactions');
  }
});

// single transaction route
App.TransactionRoute = Em.Route.extend({
  model: function(params){
    return this.store.find('transaction', params.transaction_id);
  }
});

App.TransactionCreateAndEditRoute = Ember.Route.extend({
  // when click new button
  activate: function(){
    console.log('TransactionCreateAndEditRoute#activate');
    this.controllerFor('transaction').setProperties({
      'editMode': true,
      'deleteMode': false
    });
  },
  // when trying to manually leave the route
  deactivate: function(){
    console.log('TransactionCreateAndEditRoute#deactivate');
    this.controllerFor('transaction').setProperties({
      'editMode': false,
      'deleteMode': false
    });
  }
});

App.TransactionsCreateRoute = App.TransactionCreateAndEditRoute.extend({
    model: function(){
      console.log('TransactionsCreateRoute#model');
      // the model for this route is a new empty Ember.Object
      this.store.createRecord('transaction', {});
    },
    // in this case (the create route) we can re-use the transaction/edit template
    // associated with the transactionsCreateController

    renderTemplate: function(){
      console.log('TransactionsCreateRoute#renderTemplate');
      this.render('transactions.edit', {
        controller: 'transactionsCreate'
      });
    }
});

// singe transaction edit form route
App.TransactionEditRoute = Em.Route.extend({
  model: function(){
    console.log('TransactionEditRoute#model');
    return this.modelFor('transaction');
  }
});