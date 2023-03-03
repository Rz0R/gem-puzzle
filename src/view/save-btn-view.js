import AbstractView from './abstract-view.js';

const createSaveBtnTemplate = () =>
  `<button class="header__save-btn btn">Save</button>`;

class SaveBtnView extends AbstractView {
  get template() {
    return createSaveBtnTemplate();
  }

  setSaveBtnClickHandler = (callback) => {
    this._callback.btnClick = callback;
    this.element.addEventListener('click', this.#btnClick);
  };

  #btnClick = (evt) => {
    this._callback.btnClick(evt);
  };
}

export default SaveBtnView;
