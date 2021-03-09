import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

//line 34 is customized
const WelcomeScreen = (props) => {
  return (
    <View>
      {/* <Image source={require('../../assets/istock_college_blurred.png')} style={styles.backgroundImage} />
         <Text>Welcome to your future</Text> */}
      <ImageBackground
        source={require("../../assets/istock_college_blurred.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ height: 250, width: 300, position: "absolute", top: 70 }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 60,
                textShadowColor: "black",
                textShadowRadius: 1,
              }}
            >
              Welcome to <Text style={{ color: "#f5da4a" }}>your</Text> future.
            </Text>
            {/* <Text style={{color: "white", marginTop:100, fontWeight:'bold', fontSize:20, textShadowColor:"black"}}>
            Would you like to go to a 4-year college? Even if you don’t
            currently plan to attend college, use this app to learn more about
            how to receive money to help pay for school. It’s okay if you don’t
            have exact answers for the questions we’ll ask.
          </Text> */}
          </View>
          
          <TouchableOpacity
            style={styles.button}
            onPress={() => props.navigation.navigate("ThinkingScreen")}
          >
            <Text
              style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 20 }}
            >
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  button: {
    marginBottom:-500, // customized
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    backgroundColor: "black",
    padding: 20,
    borderRadius: 80,
    borderWidth: 5,
  },
});

export default WelcomeScreen;
