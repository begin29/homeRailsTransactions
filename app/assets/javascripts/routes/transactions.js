App.TransactionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('transaction');
  }
});