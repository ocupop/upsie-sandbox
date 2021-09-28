import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | warranties/brand', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:warranties/brand');
    assert.ok(route);
  });
});
