import Ember from 'ember';

export default Ember.ObjectController.extend({
  nonNewModels: Ember.computed.filterBy('model', 'isNew', false)
});