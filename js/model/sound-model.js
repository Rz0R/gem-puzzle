import AbstractObservable from './abstract-observable.js';

class SoundModel extends AbstractObservable {
  #isSoundEnabled = true;

  get isSoundEnabled() {
    return this.#isSoundEnabled;
  }

  set isSoundEnabled(value) {
    this.#isSoundEnabled = value;
    this._notify(value);
  }
}

export default SoundModel;
