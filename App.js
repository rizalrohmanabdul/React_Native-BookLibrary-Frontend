import React, { Fragment } from "react";
import store from "./src/Public/redux/store";
import { Provider } from "react-redux";
import RootNavigator from "./src/routes/rootNavigator";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <RootNavigator />
      </Fragment>
    </Provider>
  );
};

export default App;
