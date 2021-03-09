import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ResultsComponent from "./components/ResultsComponent";
import * as firebase from "firebase";

export default class TotalAid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eitc: 0,
      fedAid : 0,
      otherAid : 0,
      stateAid : 0
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("information/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        // var x = parseInt(data.dida) + parseInt(data.amrita)
        // console.log(x)
        this.setState({
          eitc : data.eitc,
          fedAid : data.federalAid,
          otherAid: data.otherAidAmount,
          stateAid : data.stateAidAmount
        })
      });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Button title="See my breakdown" onPress={() => this.props.navigation.navigate("ResultsBreakdown")}/> */}
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          You may qualify for
        </Text>
        <Text style={{ fontSize: 80, padding: 30 }}>
          ${(this.state.eitc + this.state.fedAid + this.state.otherAid + this.state.stateAid).toLocaleString()}
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("ResultsBreakdown");
          }}
        >
          <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>
            SEE MY BREAKDOWN
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  button: {
    marginTop: 30, // customized
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 80,
  },
});
