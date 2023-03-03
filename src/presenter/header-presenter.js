import HeaderView from '../view/header-view.js';
import NewGameBtnView from '../view/new-game-btn-view.js';
import SizeSelectorView from '../view/size-selector-view.js';
import SaveBtnView from '../view/save-btn-view.js';
import LoadBtnView from '../view/load-btn-view.js';
import ResultBtnView from '../view/result-btn-view.js';
import SoundBtnView from '../view/sound-btn-view.js';
import MoveCounterView from '../view/moves-counter-view.js';
import TimerView from '../view/timer-view.js';
import { remove, render, replace } from '../utils/render.js';
import { RenderPosition } from '../const.js';

class HeaderPresenter {
  #headerContainer = null;
  #boardSizeModel = null;
  #movesCounterModel = null;
  #timerModel = null;
  #soundModel = null;
  #headerComponent = null;
  #newGameBtnComponent = null;
  #sizeSelectorComponent = null;
  #saveBtnComponent = null;
  #loadBtnComponent = null;
  #resultBtnComponent = null;
  #soundBtnComponent = null;
  #movesCounterComponent = null;
  #timerComponent = null;

  #newGameHandler = null;
  #saveGameHandler = null;
  #loadGameHandler = null;
  #showResultsHandler = null;

  constructor(
    headerContainer,
    boardSizeModel,
    movesCounterModel,
    timerModel,
    soundModel,
    newGameHandler,
    saveGameHandler,
    loadGameHandler,
    showResultsHandler
  ) {
    this.#headerContainer = headerContainer;
    this.#boardSizeModel = boardSizeModel;
    this.#movesCounterModel = movesCounterModel;
    this.#timerModel = timerModel;
    this.#soundModel = soundModel;
    this.#newGameHandler = newGameHandler;
    this.#saveGameHandler = saveGameHandler;
    this.#loadGameHandler = loadGameHandler;
    this.#showResultsHandler = showResultsHandler;
  }

  init = () => {
    this.#render();
    this.#movesCounterModel.addObserver(this.#handleMoveCounterEvent);
    this.#timerModel.addObserver(this.#handleTimerEvent);
    this.#soundModel.addObserver(this.#handleSoundEvent);
    this.#boardSizeModel.addObserver(this.#handleBoardSizeChangeEvent);
  };

  #render = () => {
    this.#headerComponent = new HeaderView();
    render(this.#headerContainer, this.#headerComponent);
    this.#renderMoveCounter();
    this.#renderTimer();
    this.#renderNewGameBtn();
    this.#renderSizeSelector();
    this.#renderSaveBtn();
    this.#renderLoadBtn();
    this.#renderResultBtn();
    this.#renderSoundBtn();
  };

  #renderNewGameBtn = () => {
    this.#newGameBtnComponent = new NewGameBtnView();
    this.#newGameBtnComponent.setNewGameBtnClickHandler(this.#newGameHandler);
    render(
      this.#headerComponent.getHeaderTopElement(),
      this.#newGameBtnComponent,
      RenderPosition.AFTERBEGIN
    );
  };

  #renderSizeSelector = () => {
    this.#sizeSelectorComponent = new SizeSelectorView(
      this.#boardSizeModel.size
    );

    this.#sizeSelectorComponent.setSelectorChangeHandler(
      (value) => (this.#boardSizeModel.size = value)
    );

    render(
      this.#headerComponent.getHeaderTopElement(),
      this.#sizeSelectorComponent
    );
  };

  #renderSaveBtn = () => {
    this.#saveBtnComponent = new SaveBtnView();
    this.#saveBtnComponent.setSaveBtnClickHandler(this.#saveGameHandler);
    render(this.#headerComponent.getHeaderTopElement(), this.#saveBtnComponent);
  };

  #renderLoadBtn = () => {
    this.#loadBtnComponent = new LoadBtnView();
    this.#loadBtnComponent.setLoadBtnClickHandler(this.#loadGameHandler);
    render(this.#headerComponent.getHeaderTopElement(), this.#loadBtnComponent);
  };

  #renderResultBtn = () => {
    this.#resultBtnComponent = new ResultBtnView();
    this.#resultBtnComponent.setResultBtnClickHandler(this.#showResultsHandler);
    render(
      this.#headerComponent.getHeaderTopElement(),
      this.#resultBtnComponent
    );
  };

  #renderSoundBtn = () => {
    const prevSoundBtnComponent = this.#soundBtnComponent;
    this.#soundBtnComponent = new SoundBtnView(this.#soundModel.isSoundEnabled);
    this.#soundBtnComponent.setSoundClickHandler(this.#toggleSound);

    if (!prevSoundBtnComponent) {
      render(
        this.#headerComponent.getHeaderTopElement(),
        this.#soundBtnComponent
      );
      return;
    }

    replace(this.#soundBtnComponent, prevSoundBtnComponent);
    remove(prevSoundBtnComponent);
  };

  #renderMoveCounter = () => {
    const prevMoveCounterComponent = this.#movesCounterComponent;
    this.#movesCounterComponent = new MoveCounterView(
      this.#movesCounterModel.moves
    );

    if (!prevMoveCounterComponent) {
      render(
        this.#headerComponent.getHeaderBottomElement(),
        this.#movesCounterComponent,
        RenderPosition.AFTERBEGIN
      );
      return;
    }

    replace(this.#movesCounterComponent, prevMoveCounterComponent);
    remove(prevMoveCounterComponent);
  };

  #renderTimer = () => {
    const prevTimerComponent = this.#timerComponent;
    this.#timerComponent = new TimerView(this.#timerModel.time);

    if (!prevTimerComponent) {
      render(
        this.#headerComponent.getHeaderBottomElement(),
        this.#timerComponent
      );
      return;
    }

    replace(this.#timerComponent, prevTimerComponent);
    remove(prevTimerComponent);
  };

  #handleMoveCounterEvent = () => {
    this.#renderMoveCounter();
  };

  #handleTimerEvent = () => {
    this.#renderTimer();
  };

  #handleSoundEvent = () => {
    this.#renderSoundBtn();
  };

  #toggleSound = () => {
    this.#soundModel.isSoundEnabled = !this.#soundModel.isSoundEnabled;
  };

  #handleBoardSizeChangeEvent = (value) => {
    this.#sizeSelectorComponent.setSelectorValue(value);
  };
}

export default HeaderPresenter;
