import Ember from 'ember';

export default Ember.ObjectController.extend({
  nonNewModels: Ember.computed.filterBy('money_transactions', 'isNew', false)
});