export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.onerror = function() {
    console.log('Errors are bad');
  }
}

export default { initialize };
