import PopupView from '../view/popup-view.js';
import WinMessageView from '../view/win-message-view.js';
import ResultsView from '../view/results-view.js';
import { remove, render } from '../utils/render.js';

class PopupPresenter {
  #popupContainer = null;
  #popupComponent = null;
  #winMessageComponent = null;
  #resultsComponent = null;

  constructor(popupContainer) {
    this.#popupContainer = popupContainer;
  }

  renderPopup() {
    if (!this.#popupComponent) {
      this.#popupComponent = new PopupView();
      render(this.#popupContainer, this.#popupComponent);
    }
  }

  showWinMessage = (moves, time) => {
    this.renderPopup();
    this.#winMessageComponent = new WinMessageView(moves, time);
    render(
      this.#popupComponent.getContentContainer(),
      this.#winMessageComponent
    );
    this.#popupComponent.showPopup();
  };

  showResults = (boardSize, resultsData) => {
    this.renderPopup();
    this.#resultsComponent = new ResultsView(boardSize, resultsData);
    render(this.#popupComponent.getContentContainer(), this.#resultsComponent);
    this.#popupComponent.showPopup();
  };
}

export default PopupPresenter;
