import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import FoodComponent from "./components/FoodComponent";
const FoodScreen = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.questionText}>You could be eligible for up to</Text>
      <FoodComponent />
      <Text style={styles.questionText}>in food assistance</Text>
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

export default FoodScreen;
