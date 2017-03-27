import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Title here',
  isFrozen: false,
  isExpanded: true,

  accordian() {
    return true;
  },

  actions: {
    accordian() {
      if (this.accordian()) {
        this.toggleProperty('isExpanded');
      }
    }
  }
});
