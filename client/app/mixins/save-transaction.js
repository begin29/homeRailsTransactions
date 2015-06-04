import Ember from 'ember';

var SaveTransactionMixin = Ember.Mixin.create({
  saveTransaction: function(){
    this.get('model').save().then(
      function() {
        this.transitionToRoute('money_transactions');
      }.bind(this), function(error) {
        console.log(error);
      });
  }
});


export default SaveTransactionMixin