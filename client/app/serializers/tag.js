import DS from 'ember-data';

export default  DS.ActiveModelSerializer.extend({
  serializeHasMany: function(record, json, relationship) {
    var key = relationship.key;

    var relationshipType = record.constructor.determineRelationshipType(relationship);

    if (relationshipType === 'manyToNone' || relationshipType === 'manyToMany' || relationshipType === 'manyToOne') {
      //NOTE: format ids for Rails API
      json[Ember.String.singularize(key)+'_ids'] = Ember.get(record, key).mapBy('id');
    }
  }
});