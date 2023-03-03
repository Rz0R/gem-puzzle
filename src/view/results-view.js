import { formatTime } from '../utils/common.js';
import AbstractView from './abstract-view.js';

const createTableRowTemplate = (number, time, moves) =>
  `<div class="table-results__row">
		<div class="table-results__number">${number}</div>
		<div class="table-results__time">Time: <span>${formatTime(time)}</span></div>
		<div class="table-results__moves">Moves: <span>${moves}</span></div>
	</div>`;

const createResultTemplate = (boardSize, resultsData) => {
  const tableRows = resultsData
    .map(({ time, moves }, i) => createTableRowTemplate(i + 1, time, moves))
    .join('');

  let message = '';

  if (resultsData.length === 0) {
    message = `There are no results for the ${boardSize}x${boardSize} field yet`;
  } else {
    message = `Best results for the ${boardSize}x${boardSize} field`;
  }

  return `<div class="results">
      <h2 class="results__title">Results</h2>
      <h3 class="results__subtitle">${message}</h3>
      <div class="results__table table-results">${tableRows}</div>
    </div>`;
};

class ResultsView extends AbstractView {
  #boardSize = null;
  #resultsData = null;

  constructor(boardSize, resultsData) {
    super();
    this.#boardSize = boardSize;
    this.#resultsData = resultsData;
  }

  get template() {
    return createResultTemplate(this.#boardSize, this.#resultsData);
  }
}

export default ResultsView;
