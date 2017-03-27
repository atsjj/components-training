import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;

export default Ember.Component.extend({
  isExpanded: true,

  actions: {
    accordian() {
      const isExpanded = get(this, 'isExpanded');

      set(this, 'isExpanded', !isExpanded);
    }
  }
});
