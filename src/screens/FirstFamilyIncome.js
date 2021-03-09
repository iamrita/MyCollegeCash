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

const FirstFamilyIncome = (props) => {
  const [firstButtonPress, setFirstButtonPress] = useState("unclicked");
  const [secondButtonPress, setSecondButtonPress] = useState("unclicked");
  const [thirdButtonPress, setThirdButtonPress] = useState("unclicked");

  const first_button =
    firstButtonPress === "clicked"
      ? styles.clickedButton
      : styles.unclickedButton;
  const first_text =
    firstButtonPress === "clicked" ? styles.clickedText : styles.unclickedText;
  const first_text_small =
    firstButtonPress === "clicked"
      ? styles.clickedTextSmall
      : styles.unclickedTextSmall;
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
        How much does your family make each year?
      </Text>
      <Text style={styles.questionText2}>
        This does not have to be exact. Make your best guess; you can always
        come back and update this later.
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

          updateData("$26,000 or less");
        }}
      >
        <Text style={first_text}>
          $26,000 or less{"\n"}
          <Text style={first_text_small}>
            (This is equal to about $15 per hour)
          </Text>
        </Text>
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

          updateData("$26,001 to $92,100");
        }}
      >
        <Text style={second_text}>$26,001 to $92,100</Text>
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

          updateData("More than $92,100");
        }}
      >
        <Text style={third_text}>More than $92,100</Text>
      </TouchableOpacity>

      {firstButtonPress === "clicked" ||
      secondButtonPress === "clicked" ||
      thirdButtonPress === "clicked" ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            secondButtonPress === "clicked"
              ? props.navigation.navigate("SecondFamily")
              : props.navigation.navigate("familySize")
          }
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
  questionText2: {
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 30,
    marginBottom: 20,
    marginTop: 5,
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
  unclickedTextSmall: {
    color: "black",
    textAlign: "center",
    fontSize: 15,
  },
  clickedTextSmall: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
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
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    backgroundColor: "black",
  },
  grayedButton: {
    marginTop: 15, // customized
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

export default FirstFamilyIncome;
