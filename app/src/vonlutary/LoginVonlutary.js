/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Button, FormLabel, FormInput, Text  } from 'react-native-elements';

export default class LoginVonlutary extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
    signIn() {
        this.props.navigation.navigate('HomeVonlutary')
    }
    render() {
        const self = this;
        return (
            <View style={styles.container}>
                <View style={styles.viewLogo}>
                    <Text h1>iCan Vonlutary</Text>
                </View>
                <View style={styles.viewSocial}>
                    <FormLabel>Email</FormLabel>
                    <FormInput onChangeText={(email) => this.setState({email})}/>
                    <FormLabel>Password</FormLabel>
                    <FormInput onChangeText={(password) => this.setState({password})}/>
                    <Button
                        onPress={() => this.signIn()}
                        borderRadius={20}
                        backgroundColor = {'#393e46'}
                        icon={{name: 'sign-in', type: 'font-awesome'}}
                        title='Sign In' 
                    />
                </View>
                <View style={styles.viewVoluntary}>
                    <Button
                        onPress={() => self.props.navigation.navigate('Login')}
                        raised
                        borderRadius={20}
                        backgroundColor = {'#393e46'}
                        icon={{name: 'undo', type: 'font-awesome'}}
                        title='Go back' 
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

