import AbstractView from './abstract-view.js';

const createPopupViewTemplate = () =>
  `<div class="popup">
			<div class="popup__overlay"></div>
			<div class="popup__content">
				<div class="popup__wrapper"></div>
				<button class="popup__close-btn"></button>
			</div>
		</div>`;

class PopupView extends AbstractView {
  #isActive = false;

  constructor() {
    super();
    this.#setPopupClickHandler();
    this.#setPopupTransitionEndHandler();
  }

  get template() {
    return createPopupViewTemplate();
  }

  getContentContainer = () => {
    return this.element.querySelector('.popup__wrapper');
  };

  showPopup = () => {
    document.documentElement.classList.add('popup-active');
    this.#isActive = true;
  };

  #setPopupClickHandler = () => {
    this.element.addEventListener('click', this.#popupClickHandler);
  };

  #setPopupTransitionEndHandler = () => {
    this.element.addEventListener(
      'transitionend',
      this.#popupTransitionEndHandler
    );
  };

  #popupClickHandler = (evt) => {
    if (
      evt.target.closest('.popup__overlay') ||
      evt.target.closest('.popup__close-btn')
    ) {
      this.#closePopup();
      return;
    }
  };

  #popupTransitionEndHandler = (evt) => {
    if (this.#isActive) return;
    if (!evt.target.classList.contains('popup__overlay')) return;
    if (this.getContentContainer().firstElementChild) {
      this.getContentContainer().firstElementChild.remove();
    }
  };

  #closePopup = () => {
    document.documentElement.classList.remove('popup-active');
    this.#isActive = false;
  };
}

export default PopupView;
