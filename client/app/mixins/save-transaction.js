import Ember from 'ember';
import EmberValidations from 'ember-validations';

var SaveTransactionMixin = Ember.Mixin.create(EmberValidations.Mixin, {
  validations: {
    description: {
      presence: true,
      length: { minimum: 10 }
    },
    price: {
      numericality: true
    }
  },

  saveTransaction: function(){
    var _this = this;
    var myModel = _this.get('model');
    _this.validate().then(function() {
      // all validations pass
      console.log(_this.get('isValid')); // true

      _this.send('closeTransactionForm');
      _this.get('model').save().then(
        function() {
          console.log('aftersave');
        }.bind(this), function(error) {
          console.log(error);
        });
    }).catch(function() {
      $.each( Ember.keys(myModel.toJSON()), function( index, value ) {
        myModel.get('errors').add( value, _this.get('errors')[value] )
      });
      _this.get('errors')
    }).finally(function() {
        // all validations complete
      // regardless of isValid state
    });
  }
});

export default SaveTransactionMixin;