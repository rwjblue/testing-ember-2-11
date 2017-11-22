import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    myClick() {
      console.log('about to throw!');
      throw new Error('boom!');
    }
  }
});
