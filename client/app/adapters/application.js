import DS from "ember-data";

var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1',
  pathForType: function(type) {
    return Ember.String.underscore(type)+ 's';
  }
});

export default ApplicationAdapter;