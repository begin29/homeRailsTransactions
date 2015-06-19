import Ember from 'ember';

export default Ember.ObjectController.extend({
  nonNewMoneyModels: Ember.computed.filterBy('money_transactions', 'isNew', false),
  nonNewTagModels: Ember.computed.filterBy('codes', 'isNew', false),
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
      this.set('newTag', newTag);
    },

    saveNewTag: function(newTag, money_transaction){
      money_transaction.set('isAddTag', false);
      var notNewTags = this.get('nonNewTagModels');
      var insertedVal = newTag.get('name');
      console.log(notNewTags.findBy("name", insertedVal));

      var searchedTag = notNewTags.findBy("name", insertedVal)
      if( searchedTag  !== undefined ){
        money_transaction.get('tags').addObject(searchedTag);
        money_transaction.save().then(
          function(){
            console.log('tag is added');
          }.bind(this), function(error) {
            console.log(error);
          });
      }else{
        newTag.save().then(function(){
          console.log('saved new tag');
        }.bind(this), function(error) {
          console.log(error);
        });
      };
    }

  } //actions
});