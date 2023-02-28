import AbstractView from './abstract-view.js';

const createSoundViewTemplate = () =>
  `<div>
		<audio data-move-sound src="./assets//sound/move-tile.mp3"></audio>
		<audio data-victory-sound src="./assets//sound/victory.mp3"></audio>
	</div>`;

class SoundView extends AbstractView {
  #moveSound = null;
  #victorySound = null;

  constructor() {
    super();
    this.#moveSound = this.element.querySelector('audio[data-move-sound]');
    this.#victorySound = this.element.querySelector(
      'audio[data-victory-sound]'
    );
    this.#victorySound.volume = 0.3;
  }

  get template() {
    return createSoundViewTemplate();
  }

  playMoveSound = () => {
    this.#moveSound.currentTime = 0;
    this.#moveSound.play();
  };

  playVictorySound = () => {
    this.#victorySound.currentTime = 0;
    this.#victorySound.play();
  };
}

export default SoundView;
