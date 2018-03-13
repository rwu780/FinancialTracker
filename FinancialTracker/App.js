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
  TouableOpacity,
  Button,
} from 'react-native';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBp77ueoIxjvq_bibnMOYAGWLM6RSmLlOg",
  authDomain: "financial-tracker-e6124.firebaseapp.com",
  databaseURL: "https://financial-tracker-e6124.firebaseio.com",
  projectId: "financial-tracker-e6124",
  storageBucket: "financial-tracker-e6124.appspot.com",
  messagingSenderId: "445078506224"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.itemsRef = firebaseApp.database().ref();
    this.itemsRef.on('value', function(snapshot){
    var items = [];
    console.log("Hello there");
    snapshow.forEach((child) => {
      items.push({
        name: child.val().title,
        _key: child.val().key,
        amount: child.val().amount,
      });
      firebaseApp.database().ref('users').set({
        username: "ABC",
      });

    });
  });
  };



  listenForIncomes(itemsRef){
    itemsRef.on('value', (snap) =>{
      var items=[];
      snap.forEach((child) => {
        items.push({
          name: child.val().title,
          _key: child.key,
          amount: child.amount,
        });
      });
      this.incomes = items;
    })
  }

  renderItem({item, index}){
    return(
      <TouchableHighlight onPress={this.itemPress}>
        <View style = {styles.li}>
          <Text style={styles.liText}>{item.name} {item.amount}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  itemPress(){

  }
  //
  // addEntry(){
  //   AlertIOS.prompt(
  //     'Enter a value',
  //     null,
  //     text=> console.log("You entered" + text);
  //   )
  // }


  state = {
    incomes: [
      {
        name:"Salaries",
        amount:3000,
      },
      {
        name:"Investment",
        amount: 350,
      }
    ],
    expenses: [
      {
        name:"Utilities",
        amount: 200,
      },
      {
        name:"Phone and Cable",
        amount: 150,
      },
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <HeaderBar title="Financial Tracker" />
        <DividerBar title="Income" />
        <FlatList
          data={this.incomes}
          renderItem={this.renderItem}
        >
        </FlatList>

        <DividerBar title="Expense" />
        <FlatList
          data={this.state.expenses}
          renderItem={this.renderItem}
        >
        </FlatList>
        <DividerBar title="Calculate" />
      </View>
    );
  }
}

// StatusBar Component
class HeaderBar extends Component<props> {
  render(){
    return(
      <View>
        <View style={styles.headerbar}/>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
          <Button
          onPress={this.props.addEntry}
          title="Add Entry"
          color="#841584"
          />
        </View>
      </View>
    );
  }
}

class DividerBar extends Component<props>{
  render(){
    return(
      <View style={styles.dividerbar}>
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
  dividerbar:{
    alignItems:'center',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
  },
  headerbar: {
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
