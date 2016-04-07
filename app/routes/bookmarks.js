import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`https://tiny-tn.herokuapp.com/collections/jw-bookmarks`)
    .then((response) => response.json())
  }
});
