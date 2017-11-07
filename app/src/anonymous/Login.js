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

import { Button, SocialIcon } from 'react-native-elements';

export default class Login extends Component {
  render() {
    const self = this;
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Text style={styles.logo}>iCan</Text>
            </View>
            <View style={styles.viewSocial}>
                <Button
                    onPress={() => self.props.navigation.navigate('Home')}
                    borderRadius={20}
                    icon={{name: 'user-secret', type: 'font-awesome'}}
                    title='Sign In With Anonymous' 
                />
                <Button
                    borderRadius={20}
                    backgroundColor = {'#357ebd'}
                    icon={{name: 'facebook', type: 'font-awesome'}}
                    title='Sign In With Facebook' 
                />
                <Button
                    borderRadius={20}
                    backgroundColor = {'#d43f3a'}
                    icon={{name: 'google', type: 'font-awesome'}}
                    title='Sign In With Google' 
                />
            </View>
            <View style={styles.viewVoluntary}>
                <Button
                    raised
                    onPress={() => self.props.navigation.navigate('LoginVonlutary')}
                    backgroundColor = {'#393e46'}
                    borderRadius={20}
                    icon={{name: 'user', type: 'font-awesome'}}
                    title='Voluntary' 
                />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
    },
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    logo: {
        fontSize: 40,
    },
    viewSocial: {
        flex: 2,
        justifyContent : 'space-around',        
    },
    viewVoluntary: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

