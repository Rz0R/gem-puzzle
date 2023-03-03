import GamePresenter from './presenter/game-presenter.js';
import BoardSizeModel from './model/board-size-model.js';
import MovesCounterModel from './model/moves-counter-model.js';
import TimerModel from './model/timer-model.js';
import SoundModel from './model/sound-model.js';
import { createElement, render } from './utils/render.js';
import './scss/style.scss';

const body = document.querySelector('body');

const createRootTemplate = () => '<div id="root"></div>';
const root = createElement(createRootTemplate);

render(body, root);

const boardSizeModel = new BoardSizeModel();
const moveCounterModel = new MovesCounterModel();
const timerModel = new TimerModel();
const soundModel = new SoundModel();

const game = new GamePresenter(root, boardSizeModel, moveCounterModel, timerModel, soundModel);
game.init();
