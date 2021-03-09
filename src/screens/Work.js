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

const Work = (props) => {
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

  function updateData(work) {
    firebase.database().ref().child("information/").update({ work: work });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        How much are you thinking of working in college?
      </Text>
      <Text style={styles.questionText2}>
        This can be a rough estimate. Some aid might be available if you plan to
        work while you go to college.
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

          updateData("20 hrs/week or more");
        }}
      >
        <Text style={first_text}>20 hrs/week or more</Text>
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

          updateData("Less than 20 hrs/week");
        }}
      >
        <Text style={second_text}>Less than 20 hrs/week</Text>
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

          updateData("Work Study Program");
        }}
      >
        <Text style={third_text}>Work Study Program*</Text>
      </TouchableOpacity>
      {firstButtonPress === "clicked" ||
      secondButtonPress === "clicked" ||
      thirdButtonPress === "clicked" ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("Results")}
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
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Results")}
      >
        <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>
          CONTINUE
        </Text>
      </TouchableOpacity> */}
      <Text style={styles.asterisk}>
        *Work Study is a federal program that helps students pay for college.
        Participating may qualify you for more aid.
      </Text>
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
    marginTop: 20,
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
  asterisk: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 20,
    marginTop: 30,
    color: "gray",
  },
  grayedButton: {
    marginTop: 20, // customized
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

export default Work;
