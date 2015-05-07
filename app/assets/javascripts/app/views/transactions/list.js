App.ListTransactionsView = Ember.View.extend({
  templateName:    'app/transactions/list',
  controller: 'App.TransactionsController',

  showNew: function() {
    this.set('isNewVisible', true);
  },

  hideNew: function() {
    this.set('isNewVisible', false);
  }
});