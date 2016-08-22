'use strict';

import SeriesInfo from 'series-info';
import CharacterList from 'character-list';


export default class Index {
  constructor(el) {
    this.el = el;

  }
  start() {
    return fetch('https://gateway.marvel.com/v1/public/series/9856?apikey=acfed93d3ea60f1ebc7b5fbfe04ff69c')
    then((res) => res.json())
    .then((data) => {
      var seriesData = new SeriesInfo(modify, data);
      seriesData.render();
    })

  }
}
