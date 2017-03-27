import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    aSaveActionHook(user) {
      console.info('We saved!', user);
    },

    aSaveErrorActionHook(user) {
      console.error('We tried to save, but we failed!', user);
    }
  }
});
