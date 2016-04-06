import Ember from 'ember';

export default Ember.Controller.extend({
  addPerson() {
    const values = {
      first: this.first,
      last: this.last,
      address: this.address,
      phone: this.phone,
    };
  const url = `https://tiny-tn.herokuapp.com/collections/jw-people`

  fetch(url, {
    method: `POST`,
    headers: {
      Accept: `application/json`,
      'Content-type': `application/json`,
    },
    body: JSON.stringify(values),
  }).then((response) => response.json())
    .then((info) => {

    });
  },

  savePerson(info) {
    this.set(`model`, [info, ...this.model])
  }
});
