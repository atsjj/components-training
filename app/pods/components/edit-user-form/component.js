import Ember from 'ember';

export default Ember.Component.extend({
  user: null,

  'on-save-click': function(user) {
    console.log('Save was clicked!', user);
  },

  actions: {
    save() {
      this.get('on-save-click')(this.get('user'));
    }
  }
});
