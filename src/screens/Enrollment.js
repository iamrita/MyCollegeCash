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

const Enrollment = (props) => {
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

  function updateData(enrollment) {
    firebase
      .database()
      .ref()
      .child("information/")
      .update({ enrollment: enrollment });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        What type of college enrollment are you considering?
      </Text>
      <Text style={styles.questionText2}>
        This is just a rough estimate based on what you know now. Some types of
        aid depend on you attending college at least half or full time.
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

          updateData("Full time");
        }}
      >
        <Text style={first_text}>Full Time</Text>
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

          updateData("Half time");
        }}
      >
        <Text style={second_text}>Half Time</Text>
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

          updateData("Less than half time");
        }}
      >
        <Text style={third_text}>Less Than Half Time</Text>
      </TouchableOpacity>
      {firstButtonPress === "clicked" ||
      secondButtonPress === "clicked" ||
      thirdButtonPress === "clicked" ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Work")}
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
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    backgroundColor: "black",
  },
  questionText2: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 20,
  },
  grayedButton: {
    marginTop: 10, // customized
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

export default Enrollment;
