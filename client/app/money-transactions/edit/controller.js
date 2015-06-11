import Ember from 'ember';
// "client" - name from package.json
import SaveTransactionMixin from "client/mixins/save-transaction";

var EditController =  Ember.ObjectController.extend(SaveTransactionMixin, {
  actions: {
    save: function() {
      this.saveTransaction.apply(this);
    },

    cancel: function() {
      this.transitionToRoute('money_transactions');
    }
  }
});

export default EditController;