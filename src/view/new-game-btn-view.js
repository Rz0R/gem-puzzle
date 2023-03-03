import AbstractView from './abstract-view.js';

const createNewGameTemplate = () =>
  `<button class="header__new-game-btn btn">New Game</button>`;

class NewGameBtnView extends AbstractView {
  get template() {
    return createNewGameTemplate();
  }

  setNewGameBtnClickHandler = (callback) => {
    this._callback.btnClick = callback;
    this.element.addEventListener('click', this.#btnClick);
  };

  #btnClick = (evt) => {
    this._callback.btnClick(evt);
  };
}

export default NewGameBtnView;
