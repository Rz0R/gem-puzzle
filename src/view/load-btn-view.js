import AbstractView from './abstract-view.js';

const createLoadBtnTemplate = () =>
  `<button class="header__load-btn btn">Load</button>`;

class LoadBtnView extends AbstractView {
  get template() {
    return createLoadBtnTemplate();
  }

  setLoadBtnClickHandler = (callback) => {
    this._callback.btnClick = callback;
    this.element.addEventListener('click', this.#btnClick);
  };

  #btnClick = (evt) => {
    this._callback.btnClick(evt);
  };
}

export default LoadBtnView;
