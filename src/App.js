import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from './reducers/counter';
import './App.css';

// contributor - Sunil PutteGowda (hp.sunilkumar793@gmail.com)
const App = ({ count , ...props }) => {
  return (
    <div className="App">
      <button onClick={() => props.increment()}>
        +
      </button>
        <h1>
        {count}
        </h1>
      <button onClick={() => props.decrement()}>
        -
      </button>
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  count: counter.count
});

const mapDispatchPropsToProps = (dispatch) => bindActionCreators({
  increment,
  decrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchPropsToProps)(App);
