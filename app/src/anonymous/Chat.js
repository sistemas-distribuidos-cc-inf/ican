/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

export default class Chat extends Component {
  render() {
    return (
        <View style={styles.container}> 
            <Button
                loading
                title='Loading' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    viewButton: {
        flex: 2,
        justifyContent: 'space-around',
    },
    viewHelp: {
        flex: 1,
        alignItems: 'center',        
        justifyContent: 'space-around',
    },
});

