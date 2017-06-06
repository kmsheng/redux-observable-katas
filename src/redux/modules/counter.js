import {fromJS} from 'immutable';
import {createReducer} from 'redux-create-reducer';

const ADD = 'redux-rxjs-katas/main/ADD';

const initialState = fromJS({
  counterValue: 0
});

export default createReducer(initialState, {
  [ADD](state, action) {
    return state.set('counterValue', state.get('counterValue') + action.value);
  }
});

export function add(value) {
  return {
    type: ADD,
    value
  };
}
