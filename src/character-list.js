'use strict';
import Character from 'character';

export default class CharacterList {
  constructor(element, data) {
    this.element = element.querySelector('.charTiles');
    this.data = data.data;
  }
  render() {
    this.element.innerHTML = '';

    this.data.results.forEach((characters) => {
      var frame = document.createElement('div');
      frame.classList = 'frame__small';
      var img = document.createElement('img');
      img.classList = 'frame-img';
      img.src = characters.thumbnail.path + '.jpg';

      var title = document.createElement('p');
      title.classList = 'charName';

      var character = new Character(charData);
      character.render(charData);

  });
}
}
