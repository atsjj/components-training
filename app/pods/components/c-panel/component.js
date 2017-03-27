import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: true,

  actions: {
    accordian() {
      this.toggleProperty('isExpanded');
    }
  }
});
