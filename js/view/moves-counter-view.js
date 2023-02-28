import AbstractView from './abstract-view.js';

const createMoveCounterTemplate = (value) =>
  `<div class="header__moves moves">
    <div class="moves__title">Moves:</div>
    <div class="moves__count">${value}</div>
  </div>`;

class MoveCounterView extends AbstractView {
  #value = 0;

  constructor(value) {
    super();
    this.#value = value;
  }

  get template() {
    return createMoveCounterTemplate(this.#value);
  }
}

export default MoveCounterView;
