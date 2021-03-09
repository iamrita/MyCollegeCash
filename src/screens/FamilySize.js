import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as firebase from "firebase";
import CounterInput from "react-native-counter-input";
import RNCheckboxCard from "react-native-checkbox-card";
import RadioButtonGroup from "react-native-animated-radio-button-group";


const FamilySize = (props) => {
  function updateData(size) {
    firebase
      .database()
      .ref()
      .child("information/")
      .update({ familySize: size });
  }

  const [size, setSize] = useState("2");
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        What is the total number of people in your family* including you?
      </Text>
      
      <Picker
        style={styles.picker}
        selectedValue={size}
        onValueChange={(itemValue) => setSize(itemValue)}
      >
        <Picker.Item label="Two" value="2" />
        <Picker.Item label="Three" value="3" />
        <Picker.Item label="Four" value="4" />
        <Picker.Item label="Five" value="5" />
        <Picker.Item label="Six or more" value="6" />
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          updateData(size);
          props.navigation.navigate("Enrollment");
        }}
      >
        <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>
          CONTINUE
        </Text>
      </TouchableOpacity>
      <Text style={styles.questionText2}>
        *We are defining family here as people who you live and share meals
        with.
      </Text>
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
    margin: 30,
  },
  questionText2: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 20,
    marginTop: 30,
    color: "gray",
  },
  picker: {
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    backgroundColor: "black",
  },
});

export default FamilySize;
