import AbstractView from './abstract-view.js';

const createVolumeIconTemplate = () =>
  `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
		<defs>
			<clipPath>
				<path d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"></path>
				<path d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"></path>
				<path d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z" transform="translate(0, 0)"></path>
			</clipPath>
			<clipPath>
				<path d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z" transform="translate(0, 0)"></path>
			</clipPath>
		</defs>
		<path
			d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z">
		</path>
	</svg>`;

const createVolumeMuteIconTemplate = () =>
  `<svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
		<path
			d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z">
		</path>
	</svg>`;

const createSoundBtnTemplate = (isSoundEnabled) =>
  `<button class="header__sound-btn btn">
		${isSoundEnabled ? createVolumeIconTemplate() : createVolumeMuteIconTemplate()}
	</button>`;

class SoundBtnView extends AbstractView {
  #isSoundEnabled = false;

  constructor(isSoundEnabled) {
    super();
    this.#isSoundEnabled = isSoundEnabled;
  }

  get template() {
    return createSoundBtnTemplate(this.#isSoundEnabled);
  }

  setSoundClickHandler = (callback) => {
    this._callback.btnClick = callback;
    this.element.addEventListener('click', this.#btnClick);
  };

  #btnClick = (evt) => {
    this._callback.btnClick(evt);
  };
}

export default SoundBtnView;
