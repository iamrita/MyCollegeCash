import React from 'react'
import {View, StyleSheet} from 'react-native'
import ApiKeys from './constants/ApiKeys'
import * as firebase from 'firebase'
import RootStackNavigator from './navigation/RootNavigation'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoadingComplete: false
    }

    //initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
   }
  render() {
    return (
    <View style={styles.container}><RootStackNavigator/></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
