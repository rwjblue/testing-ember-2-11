import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    throw new Error('boom!');
  }
});
