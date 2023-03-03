import AbstractView from './abstract-view.js';

const createResultBtnTemplate = () =>
  `<button class="header__result-btn btn">Results</button>`;

class ResultBtnView extends AbstractView {
  get template() {
    return createResultBtnTemplate();
  }

  setResultBtnClickHandler = (callback) => {
    this._callback.btnClick = callback;
    this.element.addEventListener('click', this.#btnClick);
  };

  #btnClick = (evt) => {
    this._callback.btnClick(evt);
  };
}

export default ResultBtnView;
