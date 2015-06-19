import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    this.sendAction('editedTag', this.get('curTag') );
  },

  contextMenu: function(){
    this.sendAction('showedContextMenu', this.get('curTag') );
    return false;
  }
});