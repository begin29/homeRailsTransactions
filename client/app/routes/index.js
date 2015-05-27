// root route
var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('money_transactions');
  }
});

export default IndexRoute;