import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const ResultsBreakdown = (props) => {
  return (
    <View style={{ alignItems: "center", margin: 20 }}>
      <Text style={styles.questionText}>
        There are four categories of aid you can look into.
      </Text>
      <View style={{ flexDirection: "row", alignItems: "stretch" }}>
        <View style={{ alignItems: "center", marginLeft: 50 }}>
          <View>
            <MaterialCommunityIcons
              name="city-variant-outline"
              size={100}
              color="black"
              style={{ marginBottom: 40 }}
            />
          </View>
          <FontAwesome5 name="building" size={80} color="black" />
          <MaterialCommunityIcons name="food" size={100} color="black" />
          <MaterialCommunityIcons
            name="cash-multiple"
            size={100}
            color="black"
          />
        </View>
        <View style={{ alignItems: "center", margin: 30, marginTop: -10 }}>
        <TouchableOpacity onPress={() =>props.navigation.navigate("FederalScreen")}>
          <Text
            style={{
              color: "black",
              fontSize: 12,
              width: 180,
              padding: 10,
              borderWidth: 2,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Federal Grant{"\n"}</Text>This
            includes the Pell Grant, offered to students around the country,
            depending on your income.
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("StateComponent")}> 
          <Text
            style={{
              color: "black",
              fontSize: 12,
              width: 180,
              padding: 10,
              borderWidth: 2,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>State Grant{"\n"}</Text>Your
            state also has resources to help you pay for tuition, depending on
            your income and sometimes your GPA.
            
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("FoodScreen")}>
          <Text
            style={{
              color: "black",
              fontSize: 12,
              width: 180,
              padding: 10,
              borderWidth: 2,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              Other Cash for Students{"\n"}
            </Text>
            These are other sources of money that can help you pay for
            non-school related costs, like food.
          </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("EITC")}>
          <Text
            style={{
              color: "black",
              fontSize: 12,
              width: 180,
              padding: 10,
              borderWidth: 2,
              marginBottom: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>EITC{"\n"}</Text>These are
            other sources of money that can help you pay for non-school related
            costs, like food.
          </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  questionText: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 35,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 110,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 20,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 20,
  },
});

export default ResultsBreakdown;
