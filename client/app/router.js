import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("money_transactions", function() {
    this.route('new');
    this.route('edit', {path: '/:money_transaction_id/edit'});
    this.route('show', {path: '/:money_transaction_id/show'});
  });
});

export default Router;
