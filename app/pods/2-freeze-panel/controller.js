import Ember from 'ember';

export default Ember.Controller.extend({
  isOpen: true,
  isFrozen: false,

  actions: {
    toggleIsFrozen() {
      this.toggleProperty('isFrozen');
    },

    togglePanel() {
      if (!this.get('isFrozen')) {
        this.toggleProperty('isOpen');
      }

      return this.get('isOpen');
    },
  }
});
