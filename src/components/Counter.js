import React, { Component } from "react";

import { connect } from "react-redux";
import { increment } from "../AC";

import PropTypes from "prop-types";

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };

  render() {
    return (
      <div>
        {this.props.counter}
        <button
          className="btn btn-sm btn-info ml-2"
          onClick={this.handleIncrement}
        >
          Increment me
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    console.log("handleIncrement");
    this.props.increment();
  };
}

// function mapStateToProps(state) {
//   return {
//     counter: state.count
//   };
// }

// const matToDispatch = { increment };

// const decorators = connect(
//   mapStateToProps,
//   matToDispatch
// );

export default connect(
  (state) => ({
    counter: state.count
  }),
  { increment }
)(Counter);
