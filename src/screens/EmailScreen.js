import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

import NameComponent from './components/NameComponent'
const EmailScreen = (props) => {
  return (
    <View style={{backgroundColor:"black"}}>
      <NameComponent/>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("firstFamily");
          }}
        >
          <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginTop: 175, // customized
    marginBottom:300,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
    borderColor:"#f5da4a"
  },
  buttonView: {
     justifyContent: "center",
    alignItems: "center",
  }
});

export default EmailScreen;
