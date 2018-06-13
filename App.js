import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storeConfig from "./store/configureStore";
import Content from "./Content.js";

class App extends Component {
  render() {
    const { store, persistor } = storeConfig();
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
