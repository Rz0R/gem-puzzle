import AbstractView from './abstract-view.js';

const createBoardCellTemplate = () => `<div class="board__cell"></div>`;

class BoardCellView extends AbstractView {
  constructor() {
    super();
    this.#setCellDragOverHandler();
  }

  get template() {
    return createBoardCellTemplate();
  }

  #setCellDragOverHandler = () => {
    this.element.addEventListener('dragover', this.#cellDragOverHandler);
  };

  #cellDragOverHandler = (evt) => {
    evt.preventDefault();
  };

  setCellDropHandler = (callback) => {
    this._callback.cellDrop = callback;
    this.element.addEventListener('drop', this.#cellDropHandler);
  };

  #cellDropHandler = (evt) => {
    if (!evt.dataTransfer.getData('tile')) return;
    const data = JSON.parse(evt.dataTransfer.getData('tile'));
    this._callback.cellDrop(data);
  };
}

export default BoardCellView;
