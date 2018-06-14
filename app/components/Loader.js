import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";

const Loader = props => {
  handleChangePage = () => {
    Navigation.push("Component1", {
      component: {
        name: "Screen2",
        passProps: {
          text: "Pushed screen"
        },
        options: {
          topBar: {
            title: {
              text: "Pushed screen title"
            }
          }
        }
      }
    });
  };
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <TouchableOpacity onPress={this.handleChangePage}>
        <View style={{ backgroundColor: "orange", margin: "5%" }}>
          <Text> Clicked to change page</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
