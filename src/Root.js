import React from "react";
import App from "./App";
import store from "./store";

import { Provider } from "react-redux";

import PropTypes from "prop-types";

const Root = props => {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

Root.propTypes = {};

export default Root;
