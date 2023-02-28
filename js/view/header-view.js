import AbstractView from './abstract-view.js';

const createHeaderTemplate = () =>
  `<header class="header">
		<div class="header__top"></div>
		<div class="header__bottom"></div>
	</header>`;

class HeaderView extends AbstractView {
  get template() {
    return createHeaderTemplate();
  }

  getHeaderTopElement = () => {
    return this.element.querySelector('.header__top');
  };

  getHeaderBottomElement = () => {
    return this.element.querySelector('.header__bottom');
  };
}

export default HeaderView;
