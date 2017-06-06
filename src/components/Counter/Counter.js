import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired,
    asyncAdd: PropTypes.func.isRequired,
    cancelAsyncAdd: PropTypes.func.isRequired
  };

  render() {
    const {value, add, asyncAdd, cancelAsyncAdd} = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={add}>add</button>
        <button onClick={asyncAdd}>async add ( delay 5 seconds )</button>
        <button onClick={cancelAsyncAdd}>cancel</button>
      </div>
    );
  }
}
