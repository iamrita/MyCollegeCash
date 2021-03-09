import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";

export default class NameComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      info2: "",
      email: "",
      info3: 0,
    };
  }

  componentDidMount() {
    firebase
      .database()
      .ref("information/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        // var x = parseInt(data.dida) + parseInt(data.amrita)
        // console.log(x)
        this.setState({ info: data.firstname });
      });
  }

  componentWillUnmount() {
    firebase.database().ref("information/").off("value")
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 50 }}>
            Welcome{" "}
            <Text style={{ fontStyle: "italic" }}>{this.state.info}!</Text>
          </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>

          <Text style={{ fontWeight: "bold", fontSize: 40 }}>
            Let's get you some cash for college.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9f7e8",
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
});
