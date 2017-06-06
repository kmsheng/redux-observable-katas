import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './modules/reducer';
import {Iterable} from 'immutable';

const middlewares = [thunk];

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
