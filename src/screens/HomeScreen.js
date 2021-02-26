import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";
import TestComponent from './components/TestComponent'
const HomeScreen = (props) /* ({navigation}) and it would be navigation.navigate below */ => {
  return(
<View>
  <Text>Hello this is the home screen</Text>
  <TestComponent/>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
