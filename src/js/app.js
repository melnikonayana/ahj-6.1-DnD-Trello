import Board from './Board.js';
import StateService from './StateService.js';

const stateService = new StateService(localStorage);
const board = new Board(stateService);
board.init();
