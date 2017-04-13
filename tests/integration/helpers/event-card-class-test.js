
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('event-card-class', 'helper:event-card-class', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{event-card-class inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

