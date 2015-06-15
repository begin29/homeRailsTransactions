import Ember from 'ember';
import SaveTransactionMixin from "client/mixins/save-transaction";

export default Ember.ObjectController.extend(SaveTransactionMixin, {
  actions: {
    save: function() {
      this.saveTransaction.apply(this);
    },

    cancel: function() {
      this.transitionToRoute('money_transactions');
    }
  }
});