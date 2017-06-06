import {combineReducers} from 'redux-immutable';
import counter, {asyncAddEpic} from './counter';
import {combineEpics} from 'redux-observable';

export const rootEpic = combineEpics(
  asyncAddEpic
);

export const rootReducer = combineReducers({
  counter
});
