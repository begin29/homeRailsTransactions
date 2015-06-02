import DS from "ember-data";

var token = Ember.$('meta[name="csrf-token"]').attr('content');
var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1',
  pathForType: function(type) {
    return Ember.String.underscore(type)+ 's';
  },
  headers: {
    "X-CSRF-Token": token
  }
});

export default ApplicationAdapter;