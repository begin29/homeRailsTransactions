import Ember from 'ember';

export default Ember.ObjectController.extend({
  nonNewModels: Ember.computed.filterBy('money_transactions', 'isNew', false),
  actions: {
    editTag: function(tag) {
      tag.set('isEdited', true);
    },
    updateCurrentTag: function(tag){
      tag.set('isEdited', false);
      tag.save().then(function(){
        console.log('after tag update');
      }.bind(this), function(error) {
          console.log(error);
        }
      );
    },
    addTag: function(money_transaction){
      money_transaction.set('isAddTag', true);
      var newTag = this.store.createRecord('tag');
      newTag.get('money_transactions').addObject(money_transaction);
      this.set('tag', newTag);
    },
    saveNewTag: function(tag, money_transaction){
      money_transaction.set('isAddTag', false);
      tag.save().then(function(){
        console.log('saved new tag');
      }.bind(this), function(error) {
          console.log(error);
        }
      );
    }
  }
});