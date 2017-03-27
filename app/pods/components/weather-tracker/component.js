import Ember from 'ember';

export default Ember.Component.extend({
  isLoading: false,

  actions: {
    loadWeather(zip) {
      if (zip.length === 5) {
        this.set('isLoading', true);

        Ember.$.get('/weather')
          .then(weather => this.set('weather', weather))
          .then(() => this.set('isLoading', false));
      }
    }
  }
});
