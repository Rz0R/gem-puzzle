import HeaderPresenter from './header-presenter.js';
import PopupPresenter from './popup-presenter.js';
import BoardView from '../view/board-view.js';
import BoardCellView from '../view/board-cell-view.js';
import BoardTileView from '../view/board-tile-view.js';
import SoundView from '../view/sound-view.js';
import {
  createGameMatrix,
  shuffleGameMatrix,
  swapTile,
  canIMoveTile,
  findEmptyCell,
  saveDataGame,
  loadDataGame,
  saveResults,
  loadResults,
  filterAndSortResults,
} from '../utils/game.js';
import { remove, render } from '../utils/render.js';

class GamePresenter {
  #gameContainer = null;
  #headerPresenter = null;

  #boardComponent = null;
  #boardSizeModel = null;

  #gameState = null;
  #tiles = [];
  #cells = [];
  #isGameLoading = false;

  #soundModel = null;
  #soundComponent = null;

  #winCombination = null;

  #movesCounterModel = null;
  #timerModel = null;

  #moves = 0;
  #isGameEnd = true;

  #popupPresenter = null;

  constructor(gameContainer, boardSizeModel, movesCounterModel, timerModel, soundModel) {
    this.#gameContainer = gameContainer;
    this.#boardSizeModel = boardSizeModel;
    this.#movesCounterModel = movesCounterModel;
    this.#timerModel = timerModel;
    this.#soundModel = soundModel;
  }

  init = () => {
    this.#moves = this.#movesCounterModel.moves;
    this.#renderHeader();
    this.#initGameState();
    this.#renderBoard();
    this.#renderTiles();
    this.#renderSound();
    this.#popupPresenter = new PopupPresenter(this.#gameContainer);

    this.#boardSizeModel.addObserver(this.#handleBoardSizeEvent);
  };

  #initGameState = () => {
    let tempState = createGameMatrix(this.#boardSizeModel.size);
    this.#winCombination = tempState;
    tempState = shuffleGameMatrix(tempState);

    this.#gameState = tempState;
  };

  #newGame = () => {
    this.#movesCounterModel.moves = 0;
    this.#moves = 0;
    this.#timerModel.resetTimer();

    this.#removeBoard();
    this.#removeTiles();

    this.#renderBoard();
    this.#initGameState();
    this.#renderTiles();
  };

  #renderHeader = () => {
    this.#headerPresenter = new HeaderPresenter(
      this.#gameContainer,
      this.#boardSizeModel,
      this.#movesCounterModel,
      this.#timerModel,
      this.#soundModel,
      this.#newGame,
      this.#saveGame,
      this.#loadGame,
      this.#showResults,
    );
    this.#headerPresenter.init();
  };

  #renderBoard = () => {
    this.#boardComponent = new BoardView(this.#boardSizeModel.size);
    render(this.#gameContainer, this.#boardComponent);

    for (let i = 0; i < this.#boardSizeModel.size ** 2; i++) {
      const cell = new BoardCellView();
      cell.setCellDropHandler(this.#handleTileMove);
      this.#cells.push(cell);
      render(this.#boardComponent, cell);
    }

    this.#timerModel.startTimer();
  };

  #removeBoard = () => {
    remove(this.#boardComponent);
    this.#boardComponent = null;
    this.#cells = [];
  };

  #renderTiles = () => {
    for (const it of this.#gameState) {
      const { number, x, y } = it;
      if (number === 0) continue;
      const tile = new BoardTileView(number, x, y);
      tile.setTileClickHandler(this.#handleTileMove);
      render(this.#boardComponent, tile);
      this.#tiles.push(tile);
    }

    this.#isGameEnd = false;
  };

  #removeTiles = () => {
    for (const tiles of this.#tiles) {
      remove(tiles);
    }
    this.#tiles = [];
  };

  #renderSound = () => {
    this.#soundComponent = new SoundView();
    render(this.#gameContainer, this.#soundComponent);
  };

  #handleTileMove = (tileData) => {
    if (this.#isGameEnd) return;

    let emptyCell = findEmptyCell(this.#gameState);

    const tilePosition = { x: tileData.x, y: tileData.y };
    const emptyCellPosition = { x: emptyCell.x, y: emptyCell.y };

    if (!canIMoveTile(tilePosition, emptyCellPosition)) return;

    const tileComponent = this.#tiles.find((tile) => tile.number === tileData.number);
    tileComponent.changePosition(emptyCellPosition);
    swapTile(tilePosition, emptyCellPosition, this.#gameState);
    this.#moves++;
    this.#movesCounterModel.moves = this.#moves;
    this.#soundModel.isSoundEnabled && this.#soundComponent.playMoveSound();

    if (this.#isWin()) {
      this.#timerModel.stopTimer();
      this.#isGameEnd = true;
      this.#soundModel.isSoundEnabled && this.#soundComponent.playVictorySound();
      this.#popupPresenter.showWinMessage(this.#moves, this.#timerModel.time);
      saveResults(this.#boardSizeModel.size, this.#timerModel.time, this.#moves);
    }
  };

  #isWin = () => JSON.stringify(this.#gameState) === JSON.stringify(this.#winCombination);

  #saveGame = () => {
    if (this.#isGameEnd) return;

    saveDataGame(this.#gameState, this.#boardSizeModel.size, this.#timerModel.time, this.#moves);
  };

  #loadGame = () => {
    const dataGame = loadDataGame();
    if (dataGame === null) return;

    this.#isGameLoading = true;

    const { gameState, boardSize, time, moves } = dataGame;

    this.#gameState = gameState;
    this.#movesCounterModel.moves = moves;
    this.#moves = moves;
    this.#boardSizeModel.size = boardSize;
    this.#timerModel.stopTimer();
    this.#timerModel.time = time;

    this.#removeBoard();
    this.#removeTiles();

    this.#renderBoard();
    this.#renderTiles();

    this.#winCombination = createGameMatrix(this.#boardSizeModel.size);

    this.#isGameLoading = false;
  };

  #showResults = () => {
    let resultsData = loadResults();
    resultsData = filterAndSortResults(this.#boardSizeModel.size, resultsData);
    this.#popupPresenter.showResults(this.#boardSizeModel.size, resultsData);
  };

  #handleBoardSizeEvent = () => {
    if (this.#isGameLoading) return;
    this.#newGame();
  };
}

export default GamePresenter;
