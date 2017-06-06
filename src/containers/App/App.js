import React, {Component} from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import {compose} from 'redux';
import {connect} from 'react-redux';
import Counter from './../../components/Counter/Counter';
import {add} from './../../redux/modules/counter';

const connectFunc = connect((state) => {
  return {counterValue: state.get('counter').get('counterValue')};
}, {add});

class App extends Component {

  static propTypes = {
    add: PropTypes.func.isRequired
  };

  add = () => this.props.add(1);

  render() {
    const {counterValue} = this.props;
    console.log('here', counterValue);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter value={counterValue} add={this.add} />
      </div>
    );
  }
}

export default compose(connectFunc)(App);
