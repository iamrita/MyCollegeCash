import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as firebase from "firebase";

export default class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase
      .database()
      .ref("information/")
      .on("value", (snapshot) => {
        const data = snapshot.val();
        this.calculateFederalAid(data.firstFamilyIncome);
        this.calculateEITC(data.firstFamilyIncome);
        this.calculateOtherAid(data);
        this.calculateStateAid(data)
      });
  }

  calculateFederalAid(data) {
    if (data === "$26,000 or less") {
      firebase
        .database()
        .ref()
        .child("information/")
        .update({ federalAid: 6195 });
    } else if (data === "$26,001 to $43,000" || data === "$43,001 to $65,000") {
      firebase
        .database()
        .ref()
        .child("information/")
        .update({ federalAid: 3000 });
    } else {
      firebase
        .database()
        .ref()
        .child("information/")
        .update({ federalAid: 350 });
    }
  }

  calculateStateAid(data) {
    if (data.isCalifornia === true) {
      if (
        data.firstFamilyIncome === "$26,000 or less" ||
        data.firstFamilyIncome === "$26,001 to $43,000"
      ) {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAid: "a" });
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAidAmount: 12570 });
      }
      if (
        data.firstFamilyIncome === "$43,001 to $65,000" ||
        data.firstFamilyIncome === "$65,001 to $92,100"
      ) {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAid: "b" });
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAidAmount: 12570 });
      } else if (data.firstFamilyIncome === "More than $92,100") {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAid: "c" });
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAidAmount: 5028 });
      }
    } else {
      if (data.enrollment === "Full time" || data.enrollment === "Half time") {
        if (
          data.firstFamilyIncome === "$26,000 or less" ||
          data.firstFamilyIncome === "$26,001 to $43,000" ||
          data.firstFamilyIncome === "$43,001 to $65,000"
        ) {
          firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAid: "d" });
          firebase
          .database()
          .ref()
          .child("information/")
          .update({ stateAidAmount: 3000 });
        }
      }
    }
  }

  calculateOtherAid(data) {
    if (
      data.work === "Less than 20 hrs/week" ||
      data.enrollment === "Less than half time"
    ) {
      firebase
        .database()
        .ref()
        .child("information/")
        .update({ otherAidAmount: 0 });
      firebase.database().ref().child("information/").update({ otherAid: "a" });
    } else if (
      data.firstFamilyIncome === "$26,000 or less" ||
      data.firstFamilyIncome === "$26,001 to $43,000"
    ) {
      firebase.database().ref().child("information/").update({ otherAid: "b" });
      if (data.familySize === "2") {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ otherAidAmount: 4260 });
      } else if (data.familySize === "3") {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ otherAidAmount: 6108 });
      } else if (data.familySize === "4") {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ otherAidAmount: 7752 });
      } else if (data.familySize === "5") {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ otherAidAmount: 9216 });
      } else if (data.familySize === "6") {
        firebase
          .database()
          .ref()
          .child("information/")
          .update({ otherAidAmount: 11052 });
      }
    } else {
      firebase.database().ref().child("information/").update({ otherAid: "c" });
      firebase
        .database()
        .ref()
        .child("information/")
        .update({ otherAidAmount: 0 });
    }
  }

  calculateEITC(data) {
    if (data === "$26,000 or less" || data === "$26,001 to $43,000") {
      firebase.database().ref().child("information/").update({ eitc: 3141 });
    } else if (data === "$43,001 to $65,000") {
      firebase.database().ref().child("information/").update({ eitc: 1000 });
    } else {
      firebase.database().ref().child("information/").update({ eitc: 0 });
    }
  }

  render() {
    return (
      <View
        style={{ alignItems: "center", justifyContent: "center", margin: 30 }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 40 }}>
            Congratulations!
          </Text>
          <Text></Text>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            You've taken some
            <Text style={{ fontStyle: "italic" }}> amazing </Text>first steps.
          </Text>
          <Text></Text>

          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            Let's see your results.
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
