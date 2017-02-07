import React, { Component,PropTypes } from 'react';
import {storeName, storeValue} from '../actions/actions.js';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

class App extends Component {
  constructor(props) {
      super(props);
      this.storeName = this.storeName.bind(this);
      this.storeValue = this.storeValue.bind(this);
  }
  storeName(e){
    console.log(e.target.value);
    this.props.dispatch(storeName(e.target.value));
  }
  storeValue(){
    this.props.dispatch(storeValue(this.props.name));
  }
  render() {
    return (
      <div>
        <input type="text" value={this.props.name} onChange={this.storeName} />
        <button type="submit" onClick={this.storeValue}>submit</button>
      </div>
    );
  }
}

App.propTypes = {
    name: PropTypes.string.isRequired
};

export default connect(state => ({
    name: state.name
}))(App);
