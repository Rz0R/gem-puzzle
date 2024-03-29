import { SAVE_KEY, RESULTS_KEY } from '../const.js';

export const createGameMatrix = (size) => {
  const arr = [];
  let number = 0;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      number++;
      arr.push({ number, x, y });
    }
  }

  arr[arr.length - 1].number = 0;

  return arr;
};

export const shuffleGameMatrix = (array) => {
  const copyArr = JSON.parse(JSON.stringify(array));

  for (let i = 0; i < array.length ** 3; i++) {
    randomMove(copyArr);
  }

  return copyArr;
};

export const canIMoveTile = (pos1, pos2) => {
  const diffX = Math.abs(pos1.x - pos2.x);
  const diffY = Math.abs(pos1.y - pos2.y);

  return (diffX === 1 || diffY === 1) && (pos1.x === pos2.x || pos1.y === pos2.y);
};

export const findEmptyCell = (array) => {
  const emptyCell = array.find(({ number }) => number === 0);
  return emptyCell;
};

const findValidMoves = (pos, size) => {
  const positions = [];

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (canIMoveTile({ x, y }, pos)) {
        positions.push({ x, y });
      }
    }
  }

  return positions;
};

const randomMove = (array) => {
  const emptyCell = findEmptyCell(array);
  const size = Math.sqrt(array.length);

  const emptyCellPos = {
    x: emptyCell.x,
    y: emptyCell.y,
  };

  const validMovePositions = findValidMoves(emptyCellPos, size);
  const randomInd = Math.floor(Math.random() * validMovePositions.length);

  swapTile(validMovePositions[randomInd], emptyCellPos, array);
};

export const swapTile = (pos1, pos2, array) => {
  const tile1 = array.find((it) => it.x === pos1.x && it.y === pos1.y);
  const tile2 = array.find((it) => it.x === pos2.x && it.y === pos2.y);

  const tempPos = { x: tile1.x, y: tile1.y };

  tile1.x = tile2.x;
  tile1.y = tile2.y;

  tile2.x = tempPos.x;
  tile2.y = tempPos.y;
};

export const saveDataGame = (gameState, boardSize, time, moves) => {
  const savingData = {
    gameState,
    boardSize,
    time,
    moves,
  };

  localStorage.setItem(SAVE_KEY, JSON.stringify(savingData));
};

export const loadDataGame = () => JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');

export const sortBestResults = (results) => {
  return results
    .sort((a, b) => {
      if (a.time === b.time) {
        return a.moves - b.moves;
      }
      return a.time - b.time;
    })
    .slice(0, 10);
};

export const getResultsByBoard = (currentBoardSize, resultsData) => {
  return resultsData[currentBoardSize] || [];
};

export const loadResults = () => JSON.parse(localStorage.getItem(RESULTS_KEY) || '{}');

export const saveResults = (board, time, moves) => {
  let results = loadResults();
  let boardResults = getResultsByBoard(board, results);
  boardResults.push({ time, moves });
  boardResults = sortBestResults(boardResults);

  results[board] = boardResults;

  localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
};
