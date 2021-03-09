import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  ListView,
  FlatList,
  SafeAreaView
} from "react-native";
import ColorfulCard from "react-native-colorful-card";

const DATA = [
  {
    id: "a",
    title: "Share with Parents",
    source: require('../../assets/share.png')
  },
  {
    id: "b",
    title: "Apply with an Adult",
    source: require('../../assets/adult.png')
  },
  {
    id: "c",
    title: "Talk to Counselor",
    source: require('../../assets/chat.png')
  },
  {
    id: "e",
    title: "Learn More",
    source: require('../../assets/book.png')

  },
];

const Item = ({ title, source }) => (
  <View style={{marginHorizontal:7, marginVertical:10}}>
    <ColorfulCard
      value={title}
      valueTextStyle={{fontSize:25, color:'black'}}
      style={{ backgroundColor: "#f5da4a" }}
      iconImageSource={source}
      onPress={() => {}}

    />
    {/* <Text>{title}</Text> */}
  </View>
);

const NextSteps = (props) => {


  const renderItem = ({ item }) => (
    <Item title={item.title} source={item.source}/>
  );


  return (
    <SafeAreaView style={{justifyContent:'center', alignSelf:'center'}}>
      {/* <Text>Next Steps to Learn More</Text>
      <Text>Share with Parents</Text>
      <Text>Talk to Counselor</Text>
      <Text>Apply Directly with an adult</Text> */}
      <Text style={{fontWeight:'bold', fontSize:25, margin:40}}>Next Steps to Learn More</Text>
      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
});

export default NextSteps;
