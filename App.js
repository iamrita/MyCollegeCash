import React from "react";
import { View, StyleSheet, Button } from "react-native";
import * as firebase from "firebase";
import RootStackNavigator from "./navigation/RootNavigation";

import {LogBox} from 'react-native'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    var firebaseConfig = {
      apiKey: "AIzaSyCFjlbGIrxhrB8gi2AIu6RXrw1pYLV36Fg",
      authDomain: "testproject-9d0bc.firebaseapp.com",
      databaseURL: "https://testproject-9d0bc-default-rtdb.firebaseio.com",
      projectId: "testproject-9d0bc",
      storageBucket: "testproject-9d0bc.appspot.com",
      messagingSenderId: "1003049293166",
      appId: "1:1003049293166:web:1df37fd6d181cf895cdd7f",
    };

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  
    LogBox.ignoreLogs([
      'Animated: `useNativeDriver`',
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <RootStackNavigator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
