import AbstractObservable from './abstract-observable.js';

class TimerModel extends AbstractObservable {
  #time = 0;
  #timerId = null;

  get time() {
    return this.#time;
  }

  set time(value) {
    this.#time = value;
    this._notify(value);
  }

  startTimer = () => {
    this.#timerId = setInterval(() => {
      this.time = this.#time + 1;
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.#timerId);
    this.#timerId = null;
  };

  resetTimer = () => {
    this.stopTimer();
    this.time = 0;
  };
}

export default TimerModel;
