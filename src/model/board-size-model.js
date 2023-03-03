import AbstractObservable from './abstract-observable.js';

class BoardSizeModel extends AbstractObservable {
  #size = 4;

  get size() {
    return this.#size;
  }

  set size(value) {
    this.#size = Number(value);
    this._notify(this.#size);
  }
}

export default BoardSizeModel;
