import Ember from "ember";

var tagView = Ember.View.extend({
  isEditing: false,
  click: function (arg) {
    console.log(arg);
    console.log(this);
  }
});

export default tagView;