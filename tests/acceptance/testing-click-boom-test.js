import { test } from 'qunit';
import moduleForAcceptance from 'my-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | testing click boom');

test('visiting /', function(assert) {
  visit('/');
  click('.with-click');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
