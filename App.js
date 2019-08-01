import React, { Fragment } from "react";
import store from "./src/Public/redux/store";

import { Provider } from "react-redux";
import RootNavigator from "./src/routes/rootNavigator";
import Axios from "axios";

const App = () => {
  Axios.defaults.headers.common['authorization'] = 'w3lc0meto4pp'
  return (
    <Provider store={store}>
      <Fragment>
        <RootNavigator />
      </Fragment>
    </Provider>
  );
};

export default App;