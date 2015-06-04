import Ember from 'ember';
// "client" - name from package.json
import SaveTransactionMixin from "client/mixins/save-transaction";

export default Ember.Controller.extend(SaveTransactionMixin, {
  actions: {
    save: function() {
      this.saveTransaction.apply(this);
    },

    cancel: function() {
      this.transitionToRoute('money_transactions');
    }
  }
});