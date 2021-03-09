import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import * as firebase from "firebase";
import { Picker } from "@react-native-picker/picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default class StateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      familyIncome: "",
      familySize: "",
      enrollment: "",
      work: "",
      gpa: "3.0 or more", // change default value?
      school: "UC", // change default value?
      checked: false,
      stateAidAmount: "",
      isCalifornia: false,
      stateAid: "",
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
        this.setState({
          stateAidAmount: data.stateAidAmount,
          isCalifornia: data.isCalifornia,
          stateAid: data.stateAid,
        });
      });
  }

  componentWillUnmount() {
    firebase.database().ref("information/").off("value")
  }

  calculateStateAid(gpa, school, stateAid) {
    if (stateAid === "a" || stateAid === "b") {
      if (school === "UC") {
        if (gpa === "3.0 or more") {
          console.log("in here also");
          this.setState({ stateAidAmount: 12570 });
        }
      } else {
        if (gpa === "3.0 or more") {
          console.log("in here2");

          this.setState({ stateAidAmount: 5742 });
        }
      }
    }

    if (stateAid === "a" || stateAid === "b") {
      if (school === "Private College") {
        if (gpa === "3.0 or more") {
          this.setState({ stateAidAmount: 9084 });
        }
      }
    }

    if (stateAid === "a" && gpa === "2.0 - 3.0") {
      this.setState({ stateAidAmount: 1672 });
    }

    if (
      (stateAid === "a" && gpa === "2.0 or less") ||
      (stateAid === "b" && (gpa === "2.0 or less" || gpa === "2.0 - 3.0"))
    ) {
      this.setState({ stateAidAmount: 1094 });
    }

    if (stateAid === "c") {
      this.setState({ stateAidAmount: 5028 });
    }
  }
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        {this.state.isCalifornia && (
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 20, margin: 20 }}>
              Enter in your GPA and school of choice for more specific results.
            </Text>
          </View>
        )}
        <View
          style={{ alignItems: "center", flexDirection: "row", margin: 20 }}
        >
          {this.state.isCalifornia && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>GPA</Text>
              <Picker
                selectedValue={this.state.gpa}
                onValueChange={(itemValue) => this.setState({ gpa: itemValue })}
                style={styles.picker}
              >
                <Picker.Item label="3.0 or more" value="3.0 or more" />
                <Picker.Item label="2.0 - 3.0" value="2.0 - 3.0" />
                <Picker.Item label="2.0 or less" value="2.0 or less" />
              </Picker>
            </View>
          )}
          {this.state.isCalifornia && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontWeight: "bold" }}>School</Text>
              <Picker
                selectedValue={this.state.school}
                onValueChange={(itemValue) =>
                  this.setState({ school: itemValue })
                }
                style={styles.picker}
              >
                <Picker.Item label="UC" value="UC" />
                <Picker.Item label="CSU" value="CSU" />
                <Picker.Item label="Private College" value="Private College" />
              </Picker>
            </View>
          )}
        </View>
        {this.state.isCalifornia && (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                firebase
                  .database()
                  .ref()
                  .child("information/")
                  .update({ gpa: this.state.gpa });
                firebase
                  .database()
                  .ref()
                  .child("information/")
                  .update({ school: this.state.school });
                this.calculateStateAid(
                  this.state.gpa,
                  this.state.school,
                  this.state.stateAid
                );
              }}
            >
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 15 }}
              >
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          You could be eligible for up to
        </Text>
        <Text
          style={{
            fontSize: 40,
            padding: 30,
            backgroundColor: "#f5da4a",
            borderRadius: 30,
          }}
        >
          ${this.state.stateAidAmount.toLocaleString()}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          in state grants
        </Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.props.navigation.navigate("NextSteps2");
          }}
        >
          <Text style={{ color: "#f5da4a", fontWeight: "bold", fontSize: 15 }}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    width: 150,
    height: 150,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    backgroundColor: "#F2F2F2",
    padding: 10,
    borderRadius: 80,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 35,
    marginTop: 30,
    borderWidth: 2,
  },
  button2: {
    marginTop: 50,
    marginHorizontal: 35,
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    padding: 10,
    borderRadius: 80,
    borderWidth: 5,
    backgroundColor: "black",
  },
});
