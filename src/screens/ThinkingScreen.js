import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

//line 34 is customized
const ThinkingScreen = (props) => {
  return (
    <View style={{ alignItems: "center",flexDirection:'column', height:'100%'}}>
      <Text
        style={{
          marginTop:'5%',
          height: '55%',
          width: '70%',
          color: "black",
          fontWeight: "bold",
          fontSize: 22,
        }}
      >
        Would you like to go to a 4-year college?
        {"\n\n"}Even if you don’t currently plan to attend college, use this app
        to learn more about how to receive money to help pay for school.
        {"\n\n"}It’s okay if you don’t have exact answers for the questions
        we’ll ask. Feel free to answer to the best of your abilities.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("screen")}
      >
        <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 18 }}>
          GET ME MY COLLEGE CASH
        </Text>
      </TouchableOpacity>
      <Image
        style={{ height: "40%", width: "100%", marginTop:'5%'}}
        source={require("../../assets/idea_girl.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
  },
});

export default ThinkingScreen;
