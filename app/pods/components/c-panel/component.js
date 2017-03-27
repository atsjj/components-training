import Ember from 'ember';

export default Ember.Component.extend({
  title: 'Title here',
  isExpanded: true,

  actions: {
    accordian() {
      this.toggleProperty('isExpanded');
    }
  }
});
