import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    add: PropTypes.func.isRequired
  };

  render() {
    const {value, add} = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={add}>add</button>
      </div>
    );
  }
}
