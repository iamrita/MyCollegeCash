import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import EITCComponent from "./components/EITCComponent";

const EITC = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.questionText}>
        Ask your counselor how your parents can file their taxes for free.
      </Text>
      <EITCComponent />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("NextSteps2")}
      >
        <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>
          NEXT STEPS
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  questionText: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 35,
  },
  button: {
    marginTop: 50,
    marginHorizontal: 35,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    backgroundColor: "black",
  },
});

export default EITC;
