import { AppRegistry } from "react-native";
import { Navigation } from "react-native-navigation";
import { screenMap } from "./app/screens/index.js";
import App from "./app/App";

Object.keys(screenMap).forEach(screenId => {
  Navigation.registerComponent(screenId, () =>
    App(screenMap[screenId].component)
  );
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: "TEST",
        children: [
          {
            component: {
              name: "Screen1",
              // passProps: {

              // }
            }
          }
        ]
      }
    }
  });
});

// AppRegistry.registerComponent("reactNativeInit", () => App);
