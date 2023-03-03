import AbstractView from './abstract-view.js';

const createSizeSelectorTemplate = () =>
  `<select class="header__size size">
		<option value="3">3x3</option>
		<option value="4">4x4</option>
		<option value="5">5x5</option>
		<option value="6">6x6</option>
		<option value="7">7x7</option>
		<option value="8">8x8</option>
	</select>`;

class SizeSelectorView extends AbstractView {
  constructor(value) {
    super();
    this.setSelectorValue(value);
  }

  get template() {
    return createSizeSelectorTemplate();
  }

  setSelectorValue = (value) => {
    this.element.value = value;
  };

  setSelectorChangeHandler = (callback) => {
    this._callback.selectorChange = callback;
    this.element.addEventListener('change', this.#selectorChangeHandler);
  };

  #selectorChangeHandler = (evt) => {
    const value = evt.currentTarget.value;
    this._callback.selectorChange(value);
  };
}

export default SizeSelectorView;
