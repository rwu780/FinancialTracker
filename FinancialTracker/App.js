/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
} from 'react-native';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBp77ueoIxjvq_bibnMOYAGWLM6RSmLlOg",
  authDomain: "financial-tracker-e6124.firebaseapp.com",
  databaseURL: "https://financial-tracker-e6124.firebaseio.com/",
  storageBucket: "",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar title="Financial Tracker" />
        <FlatList
          data={[
            {title: 'Devin', key:"Devin", price:"300"},
            {title: 'Jackson', key: 'Jackson', price:"(100)"},
            {title: 'James', key: 'James', price:"(200)"},
            {title: 'Joel', key:'Joel', price:""},
            {title: 'John', key:"John", price:""},
          ]}
          renderItem={({item}) => <View><Text>{item.title} {item.price}</Text></View>}        />
        <ActionButton title = "Add" />
      </View>
    );
  }
}

class ActionButton extends Component {
  render(){
    return(
      <View style={styles.action}>
        <TouchableHighlight
          underlayColor={constants.actionColor}
          onPress={this.props.onPress}>
          <Text style={styles.actionText}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

class StatusBar extends Component<props> {
  render(){
    return(
      <View>
        <View style={styles.statusbar}/>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

class ListItem extends Component {
  render(){
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.item.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

class PlaceHolder extends Component<props>{
  render(){
    return(  
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>{this.props.title}</Text>
      </View>
    );
  }
}

const constants = {
  actionColor: '#24CE84'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listview:{
    flex: 1,
  },
  li:{
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText:{
    color: '#333',
    fontSize: 16,
  },
  navbar:{
    alignItems:'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row',
  },
  navbarTitle:{
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color:'#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action:{
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
});
