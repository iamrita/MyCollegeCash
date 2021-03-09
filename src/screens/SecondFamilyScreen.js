import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Button,
  TouchableOpacity,
} from "react-native";
import * as firebase from "firebase";

const SecondFamilyIncome = (props) => {
  const [firstButtonPress, setFirstButtonPress] = useState("unclicked");
  const [secondButtonPress, setSecondButtonPress] = useState("unclicked");
  const [thirdButtonPress, setThirdButtonPress] = useState("unclicked");

  const first_button =
    firstButtonPress === "clicked"
      ? styles.clickedButton
      : styles.unclickedButton;
  const first_text =
    firstButtonPress === "clicked" ? styles.clickedText : styles.unclickedText;
  const second_button =
    secondButtonPress === "clicked"
      ? styles.clickedButton
      : styles.unclickedButton;
  const second_text =
    secondButtonPress === "clicked" ? styles.clickedText : styles.unclickedText;
  const third_button =
    thirdButtonPress === "clicked"
      ? styles.clickedButton
      : styles.unclickedButton;
  const third_text =
    thirdButtonPress === "clicked" ? styles.clickedText : styles.unclickedText;

  function updateData(income) {
    firebase
      .database()
      .ref()
      .child("information/")
      .update({ firstFamilyIncome: income });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Let's narrow that down a little more.
      </Text>
      <TouchableOpacity
        style={first_button}
        onPress={() => {
          {
            if (firstButtonPress === "unclicked") {
              setFirstButtonPress("clicked");
              setSecondButtonPress("unclicked");
              setThirdButtonPress("unclicked");
            }
          }
          {
            if (firstButtonPress === "clicked") {
              setFirstButtonPress("unclicked");
            }
          }

          updateData("$26,001 to $43,000");
        }}
      >
        <Text style={first_text}>$26,001 to $43,000</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={second_button}
        onPress={() => {
          {
            if (secondButtonPress === "unclicked") {
              setFirstButtonPress("unclicked");
              setSecondButtonPress("clicked");
              setThirdButtonPress("unclicked");
            }
          }
          {
            if (secondButtonPress === "clicked") {
              setSecondButtonPress("unclicked");
            }
          }

          updateData("$43,001 to $65,000");
        }}
      >
        <Text style={second_text}>$43,001 to $65,000</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={third_button}
        onPress={() => {
          {
            if (thirdButtonPress === "unclicked") {
              setFirstButtonPress("unclicked");
              setSecondButtonPress("unclicked");
              setThirdButtonPress("clicked");
            }
          }
          {
            if (thirdButtonPress === "clicked") {
              setThirdButtonPress("unclicked");
            }
          }

          updateData("$65,001 to $92,100");
        }}
      >
        <Text style={third_text}>$65,001 to $92,100</Text>
      </TouchableOpacity>
      {firstButtonPress === "clicked" ||
      secondButtonPress === "clicked" ||
      thirdButtonPress === "clicked" ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("familySize")}
        >
          <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.grayedButton} disabled={true}>
          <Text style={styles.grayedText}>CONTINUE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  questionText: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 30,
  },
  unclickedText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
  clickedText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  clickedButton: {
    width: 300,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: "black",
    backgroundColor: "black",
    marginBottom: 20,
  },
  unclickedButton: {
    width: 300,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: "black",
    marginBottom: 20,
  },
  button: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    backgroundColor: "black",
  },
  grayedButton: {
    marginTop: 50, // customized
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "#Dfdfde",
    padding: 20,
    borderRadius: 80,
  },
  grayedText: {
    fontSize: 20,
    color: "#C0c0be",
    fontWeight: "bold",
  },
});

export default SecondFamilyIncome;
