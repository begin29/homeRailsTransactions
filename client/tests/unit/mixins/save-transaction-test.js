import Ember from 'ember';
import SaveTransactionMixin from '../../../mixins/save-transaction';
import { module, test } from 'qunit';

module('Unit | Mixin | save transaction');

// Replace this with your real tests.
test('it works', function(assert) {
  var SaveTransactionObject = Ember.Object.extend(SaveTransactionMixin);
  var subject = SaveTransactionObject.create();
  assert.ok(subject);
});
