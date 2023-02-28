import AbstractView from './abstract-view.js';

const createBoardTileTemplate = (number) =>
  `<div class="board__tile" draggable="true">
    ${number}
	</div>`;

class BoardTileView extends AbstractView {
  #number;
  #x;
  #y;

  constructor(number, x, y) {
    super();
    this.#number = number;
    this.x = x;
    this.y = y;

    this.#setTileDragStartHandler();
  }

  get template() {
    return createBoardTileTemplate(this.#number);
  }

  get number() {
    return this.#number;
  }

  set x(value) {
    this.#x = value;
    this.element.style.setProperty('--x', value);
  }

  set y(value) {
    this.#y = value;
    this.element.style.setProperty('--y', value);
  }

  changePosition = ({ x, y }) => {
    this.x = x;
    this.y = y;
  };

  setTileClickHandler = (callback) => {
    this._callback.tileClick = callback;
    this.element.addEventListener('click', this.#tileClickHandler);
  };

  #tileClickHandler = (evt) => {
    this._callback.tileClick({
      number: this.#number,
      x: this.#x,
      y: this.#y,
    });
  };

  #setTileDragStartHandler = () => {
    this.element.addEventListener('dragstart', this.#tileDragStartHandler);
  };

  #tileDragStartHandler = (evt) => {
    const data = JSON.stringify({
      number: this.#number,
      x: this.#x,
      y: this.#y,
    });

    evt.dataTransfer.setData('tile', data);
  };
}

export default BoardTileView;
