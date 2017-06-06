import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createEpicMiddleware} from 'redux-observable';
import {rootReducer, rootEpic} from './modules/root';
import {Iterable} from 'immutable';

const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = [thunk, epicMiddleware];

if ('development' === process.env.NODE_ENV) {
  const logger = createLogger({
    stateTransformer: (state) => {
      if (Iterable.isIterable(state)) {
        return state.toJS();
      }
      return state;
    }
  });
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
