import { combineReducers } from 'redux';

import Grid from './reducer_game_grid';

const rootReducer = combineReducers({
  gridStatus: Grid
});

export default rootReducer;
