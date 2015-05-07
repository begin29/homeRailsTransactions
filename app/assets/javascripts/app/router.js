App.Router.map(function() {
  this.resource('transactions', function(){
    this.resource('transaction', { path:'/:transaction_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});

App.TransactionsRoute = Ember.Route.extend({
  model: function() {
    console.log('model');
    return this.store.findAll('transaction');
  }
  // ,
  // setupController: function(controller, model) {
  //   controller.set('content', model);
  // }
});