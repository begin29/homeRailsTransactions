App.TransactionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('transaction');
  }
});

App.TransactionCreateRoute = Ember.Route.extend({
  model: function() {
    return App.Transaction.create();
  },

  setupController : function(controller, model){
    controller.set("model", model);
  }
});