App.TransactionsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('transaction');
  }
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('transactions');
  }
});