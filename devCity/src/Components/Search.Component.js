import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class Search extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.searchBox} placeholder='Search' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchBox: {
    borderColor: '#000000', 
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
});
