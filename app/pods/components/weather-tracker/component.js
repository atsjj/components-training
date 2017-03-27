import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Component.extend({
  loadWeather: task(function * (zip) {
    if (zip.length === 5) {
      const weather = yield Ember.$.get('/weather');

      this.set('weather', weather);
    }
  }).restartable()
});
