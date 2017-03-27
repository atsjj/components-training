import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Title here',
  isOpen: true,

  actions: {
    toggleIsOpen() {
      if (this.get('on-title-click')) {
        this.get('on-title-click')();
      } else {
        this.toggleProperty('isOpen');
      }
    }
  }
});
