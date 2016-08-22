'use strict';

export default class SeriesInfo {
  constructor(modify, data) {
    this.modify = modify;
    this.data = data;
  }
  render() {
    var image = this.element.querySelector('.sidebar-img');
    image.src = this.data.data.results[0].thumbnail.path + '.jpg';

    var title = this.element.querySelector('.sidebar-title');
    title.innerText = this.data.data.results[0].title;

    var date = this.element.querySelector('.sidebar-date');
    date.innerText = `${this.data.data.results[0].startYear} - ${this.data.data.results[0].endYear}`;

    var creators = this.element.querySelector('.creators-names');
    creators.innerHTML = '';

    for (var i = 0; i < this.data.data.results[0].creators.items.length; i++) {
    var authors = document.createElement('li');
    authors.classList = "creators-list";
    authors.innerText = this.data.data.results[0].creators.items[i].name;
    creators.appendChild(authors);
  }
}
}
