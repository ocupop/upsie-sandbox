import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | warranties/category', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:warranties/category');
    assert.ok(route);
  });
});
