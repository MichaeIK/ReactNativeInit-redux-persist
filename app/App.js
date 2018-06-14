import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "app/store/configureStore";
import Content from "app/components/Content.js";
import Loader from "app/components/Loader";

const App = WrapedComponent => {
  const { store, persistor } = storeConfig();
  return class extends Component {
    render() {
      return (
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <WrapedComponent {...this.props} />
          </PersistGate>
        </Provider>
      );
    }
  };
};
export default App;
