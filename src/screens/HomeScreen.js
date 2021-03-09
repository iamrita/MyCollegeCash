import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as firebase from "firebase";
import { TextInput } from "react-native-gesture-handler";
import DuoToggleSwitch from "react-native-duo-toggle-switch";

const HomeScreen = (props) => {
  const [info, setInfo] = useState("");
  const [value, onChangeText] = useState("");
  const [value2, onChangeText2] = useState("");
  const [isCaliforniaChecked, setCaliforniaChecked] = useState(false);

  function getData() {
    firebase
      .database()
      .ref("people/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        // data.__ is the value
      });
  }

  function setData() {
    firebase.database().ref("people/").set({
      amanda: "age 23",
    });
  }

  function updateName(name) {
    firebase.database().ref().child("information/").update({ firstname: name });
  }

  function updateEmail(email) {
    firebase.database().ref().child("information/").update({ email: email });
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <View style={styles.container}>
            <Text style={{ fontWeight: "bold" }}>NAME*</Text>
            <TextInput
              autoCorrect={false}
              style={{ height: 40, borderColor: "black", borderBottomWidth: 1 }}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
            <View style={{ marginTop: 50 }}>
              <Text style={{ fontWeight: "bold" }}>EMAIL ADDRESS</Text>
              <TextInput
                autoCorrect={false}
                autoCapitalize={"none"}
                style={{
                  height: 40,
                  borderColor: "black",
                  borderBottomWidth: 1,
                }}
                onChangeText={(text) => onChangeText2(text)}
                value={value2}
              />
            </View>
            <View style={{ marginTop: 50 , alignItems: 'center'}}>
              <Text style={{ fontWeight: "bold" }}>
                PLEASE CHECK THE STATE YOU LIVE IN:
              </Text>
              <DuoToggleSwitch firstText="CA" secondText="LA"
                onPressPrimary={() => {
                  firebase
                      .database()
                      .ref()
                      .child("information/")
                      .update({ isCalifornia: true });
                }}
                onPressSecondary={() => {
                  firebase
                      .database()
                      .ref()
                      .child("information/")
                      .update({ isCalifornia: false });
                }}
              />
            </View>
          </View>
          <View style={styles.buttonView}>
            {value.length === 0 || !value.trim() ? (
              <TouchableOpacity style={styles.grayedButton} disabled={true}>
                <Text style={styles.grayedText}>SUBMIT</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  updateName(value);
                  updateEmail(value2);
                  props.navigation.navigate("email");
                }}
              >
                <Text style={styles.text}>SUBMIT</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#f5da4a",
    fontWeight: "bold",
  },
  grayedText: {
    fontSize: 20,
    color: "#C0c0be",
    fontWeight: "bold",
  },
  container: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 100,
  },
  button: {
    marginTop: 150, // customized
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
  },
  grayedButton: {
    marginTop: 150, // customized
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "#Dfdfde",
    padding: 20,
    borderRadius: 80,
  },
  buttonView: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
