import {fromJS} from 'immutable';
import {createReducer} from 'redux-create-reducer';
import {Observable} from 'rxjs/Observable';

const ADD = 'redux-rxjs-katas/counter/ADD';
const ASYNC_ADD = 'redux-rxjs-katas/counter/ASYNC_ADD';
const ASYNC_ADD_SUCCESS = 'redux-rxjs-katas/counter/ASYNC_ADD_SUCCESS';
const ASYNC_ADD_CANCELLED = 'redux-rxjs-katas/counter/ASYNC_ADD_CANCELLED';

const initialState = fromJS({
  counterValue: 0
});

export default createReducer(initialState, {

  [ADD](state, action) {
    return state.set('counterValue', state.get('counterValue') + action.value);
  },

  [ASYNC_ADD_SUCCESS](state, action) {
    return state.set('counterValue', state.get('counterValue') + action.value);
  }
});

export function add(value) {
  return {
    type: ADD,
    value
  };
}

export function asyncAdd(value) {
  return {
    type: ASYNC_ADD,
    value
  };
}

export function cancelAsyncAdd() {
  return {
    type: ASYNC_ADD_CANCELLED
  };
}

export function asyncAddEpic(action$) {
  return action$.ofType(ASYNC_ADD)
    .mergeMap((action) => {
      return Observable.fromPromise(new Promise((resolve, reject) => {
        setTimeout(() => resolve(action), 5000);
      }))
      .map((action) => ({type: ASYNC_ADD_SUCCESS, value: action.value}))
      .takeUntil(action$.ofType(ASYNC_ADD_CANCELLED))
      .catch((err) => console.error('err', err));
    });
}
