/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { bindActionCreators } from "redux";
import { setNewNumber } from "app/ducks/appData";
import { Navigation } from "react-native-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// type Props = {};
class Content extends Component {
  constructor(props){
    super(props);
    this.state = { click: 0 };
  }

  handleButtonClick = () => {
    const { setNewNumber, num } = this.props;
    setNewNumber(num + 1);
  };

  render() {
    const { num } = this.props;
    console.log(this.props.navigation)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity onPress={() => this.handleButtonClick()}>
          <View style={{ backgroundColor: "orange", margin: "5%" }}>
            <Text> Clicked {num} times</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    num: state.appData.num
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setNewNumber: setNewNumber
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});