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
  View,
  Alert
} from 'react-native';

import { Button, SocialIcon } from 'react-native-elements';

export default class Home extends Component {
  render() {
    const self = this;
    return (
        <View style={styles.container}> 
            <View style={styles.viewButton}> 
                <Button
                    onPress={() => self.props.navigation.navigate('Chat')}
                    large
                    backgroundColor = {'#5e0303'}
                    icon={{name: 'commenting-o', type: 'font-awesome'}}
                    title='Chat' 
                />
                <Button
                    onPress={() => self.props.navigation.navigate('Video')}
                    large
                    backgroundColor = {'#28003d'}
                    icon={{name: 'video-camera', type: 'font-awesome'}}
                    title='Video' 
                />
                <Button
                    onPress={() => self.props.navigation.navigate('Voice')}
                    large
                    backgroundColor = {'#330066'}
                    icon={{name: 'microphone', type: 'font-awesome'}}
                    title='Voice' 
                />
            </View>
            <View style={styles.viewHelp}> 
                <Button
                    onPress={() => self.props.navigation.navigate('Help')}
                    raised
                    borderRadius={20}
                    backgroundColor = {'#393e46'}
                    icon={{name: 'info', type: 'font-awesome'}}
                    title='Help' 
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

