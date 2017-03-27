import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(user) {
      return user.save()
        .then(() => {
          console.log('The user was saved by the controller');
        });
    }
  }
});
