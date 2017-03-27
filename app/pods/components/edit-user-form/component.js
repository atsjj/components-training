import Ember from 'ember';

export default Ember.Component.extend({
  user: null,

  actions: {
    save() {
      return this.get('user').save()
        .then(() => {
          console.log('Save was clicked!');
        });
    }
  }
});
