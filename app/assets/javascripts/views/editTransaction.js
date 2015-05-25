App.EditView = Em.View.extend({
  // custom actions from template
  actions: {
    closeTransactionWithTransition: function(){

      // this.$().find('.pane').css({ '-webkit-transform': 'translate3d(0%, 0, 0)' });

      // Em.run.later(this, function(){
      //   this.get('controller').send('goBack');
      // }, 600);
    },

    saveWithTransition: function(){
      var controller = this.get('controller');

      this.$().find('.pane').css({ '-webkit-transform': 'translate3d(0%, 0, 0)' });

      Em.run.later(this, function(){
        controller.send('save');
        controller.send('goBack');
      }, 600);
    }
  }
});