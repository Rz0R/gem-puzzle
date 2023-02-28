import { formatTime } from '../utils/common.js';
import AbstractView from './abstract-view.js';

const getWinMessage = (moves, time) =>
  `Hooray! You solved the puzzle in ${formatTime(
    time
  )} and ${moves}&nbsp;moves!`;

const createPopupViewTemplate = (message) =>
  `<div class="win-message">${message}</div>`;

class WinMessageView extends AbstractView {
  #message = null;

  constructor(moves, time) {
    super();
    this.#message = getWinMessage(moves, time);
  }

  get template() {
    return createPopupViewTemplate(this.#message);
  }
}

export default WinMessageView;
