import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('money_transaction', params.money_transaction_id );
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  }
});
