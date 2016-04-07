import Ember from 'ember';

const props = {
  addBookmark() {
    const bookmarkInfo = {
      name: this.name,
      nameUrl: this.nameUrl,
    };

    const url = `https://tiny-tn.herokuapp.com/collections/jw-bookmarks`;
    const fetchOptions = {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-type': `application/json`,
      },
      body: JSON.stringify(bookmarkInfo),
    };

    fetch(url, fetchOptions)
      .then((response) => response.json())
      .then((bookmark) => {
        this.set(`name`, ``)
        this.set(`nameUrl`, ``)
        this.saveBookmark(bookmark);
      });
  },

  saveBookmark(bookmark) {
    this.set(`model`, [bookmark, ...this.model])
  },
};

export default Ember.Controller.extend(props);
