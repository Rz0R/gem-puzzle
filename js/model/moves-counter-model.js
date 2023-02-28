import AbstractObservable from './abstract-observable.js';

class MovesCounterModel extends AbstractObservable {
  #moves = 0;

  get moves() {
    return this.#moves;
  }

  set moves(value) {
    this.#moves = value;
    this._notify(value);
  }
}

export default MovesCounterModel;
