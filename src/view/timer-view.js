import AbstractView from './abstract-view.js';
import { formatTime } from '../utils/common.js';

const createTimerTemplate = (value) =>
  `<div class="header__time time">
		<div class="time__title">Time:</div>
		<div class="time__value">${formatTime(value)}</div>
	</div>`;

class TimerView extends AbstractView {
  #value = 0;

  constructor(value) {
    super();
    this.#value = value;
  }

  get template() {
    return createTimerTemplate(this.#value);
  }
}

export default TimerView;
