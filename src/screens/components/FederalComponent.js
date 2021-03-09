import React from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";

export default class FederalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fedAid: "",
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
        this.setState({ fedAid: data.federalAid });
      });
  }

  render() {
    return (
      <View style={{alignItems:'center' }}>
        <Text
          style={{
            fontSize: 80,
            padding: 30,
            backgroundColor: "#f5da4a",
            borderRadius:30
          }}
        >
          ${(this.state.fedAid).toLocaleString()}
        </Text>
      </View>
    );
  }
}
