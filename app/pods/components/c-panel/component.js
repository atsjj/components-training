import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Title here',
  isOpen: true,

  'on-title-click': function(isOpen) {
    return !isOpen;
  },

  actions: {
    toggleIsOpen() {
      const isOpen = this.get('isOpen');
      const actionReturnValue = !!this.get('on-title-click')(isOpen);

      this.set('isOpen', actionReturnValue);
    }
  }
});
