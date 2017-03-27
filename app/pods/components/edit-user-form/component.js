import Ember from 'ember';

export default Ember.Component.extend({
  user: null,

  'did-save': function() {
    console.info('Save was clicked!', ...arguments);
  },

  'did-error': function() {
    console.error('Save was clicked, but oops!', ...arguments);
  },

  actions: {
    save() {
      return this.get('user').save()
        .then(this.get('did-save'))
        .catch(this.get('did-error'));
    }
  }
});
