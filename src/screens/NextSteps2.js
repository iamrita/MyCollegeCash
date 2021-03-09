import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ListView,
  FlatList,
  SafeAreaView,
} from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const DATA = [
  {
    id: "a",
    title: "Share with Parents",
    source: require("../../assets/share.png"),
  },
  {
    id: "b",
    title: "Apply with an Adult",
    source: require("../../assets/adult.png"),
  },
  {
    id: "c",
    title: "Talk to Counselor",
    source: require("../../assets/chat.png"),
  },
  {
    id: "e",
    title: "Learn More",
    source: require("../../assets/book.png"),
  },
];

const NextSteps2 = (props) => {
  return (

    <SafeAreaView style={{ justifyContent: "center", alignSelf: "center" }}>
          <Text style={{fontWeight:'bold', fontSize:25, margin:40}}>Next Steps to Learn More</Text>

      <View style={{}}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>Share With Parents    </Text>
          <Feather name="share-2" size={24} color="#f5da4a" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text  style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>Apply with an Adult    </Text>
          <MaterialIcons name="people" size={24} color="#f5da4a" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text  style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}>Talk to Counselor     </Text>
          <Entypo name="chat" size={24} color="#f5da4a" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    backgroundColor: "red",
    margin: 3,
    width: 100,
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
    flexDirection:'row'
  },
});

export default NextSteps2;
