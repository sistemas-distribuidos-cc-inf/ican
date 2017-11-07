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

import { GiftedChat } from 'react-native-gifted-chat';

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { messages: [] };
    }
    
    componentWillMount() {
    this.setState({
        messages: [
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        },
        ],
    });
    }
    
    onSend(messages = []) {
    this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
    }));
    }
    
    render() {
    return (
        <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
            _id: 1,
        }}
        />
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',        
        alignItems: 'center',
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

