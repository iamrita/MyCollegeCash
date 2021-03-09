import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import ResultsComponent from './components/ResultsComponent'
const ResultsScreen = (props) => {
  return (
    <View>
      <ResultsComponent/>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("TotalAid");
          }}
        >
          <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
        <Image style={{height:700, width: 700, bottom:250, marginLeft:100}} source={require('../../assets/man_graduate.png')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 30, // customized
    marginBottom:300,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
  },
  buttonView: {
     justifyContent: "center",
    alignItems: "center",
  }
});

export default ResultsScreen;
