import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Title here',
  isFrozen: false,
  isExpanded: true,

  actions: {
    accordian() {
      if (this.get('isFrozen')) {
        return;
      }

      this.toggleProperty('isExpanded');
    }
  }
});
