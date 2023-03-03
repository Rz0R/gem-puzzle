import AbstractView from './abstract-view.js';

const createBoardTemplate = () =>
  `<div class="board">
	</div>`;

class BoardView extends AbstractView {
  #size = 3;
  #cellSize = 20;
  #fontSize = 7.5;
  #gap = 2;

  constructor(size = 3) {
    super();
    this.#size = size;
    this.size = this.#size;
  }

  get template() {
    return createBoardTemplate();
  }

  set size(value) {
    this.#size = value;
    this.element.style.setProperty('--grid-size', value);
    this.#setCellSize();
    this.#setFontSize();
    this.#setGap();
  }

  #setCellSize = () => {
    this.#cellSize = 76 / this.#size;
    this.element.style.setProperty('--cell-size', `${this.#cellSize}vmin`);
  };

  #setFontSize = () => {
    this.#fontSize = 22.5 / this.#size;
    this.element.style.setProperty('--font-size', `${this.#fontSize}vmin`);
  };

  #setGap = () => {
    this.#gap = 6 / this.#size;
    this.element.style.setProperty('--cell-gap', `${this.#gap}vmin`);
  };
}

export default BoardView;
