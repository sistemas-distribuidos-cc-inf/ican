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

import { Button, CheckBox, Text } from 'react-native-elements';

export default class HomeVonlutary extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            voice: true, 
            video: true,
            chat: true,
        };
    }
    render() {
        const self = this;
        return (
            <View style={styles.container}> 
                 <View style={styles.viewLogo}>
                    <Text h4>Check the boxes</Text>
                </View>
                <View style={styles.viewButton}> 
                    <CheckBox
                        onPress={() => this.setState({chat: !self.state.chat})}
                        center
                        title='Chat'
                        checked={this.state.chat}
                    />
                    <CheckBox
                        onPress={() => this.setState({voice: !self.state.voice})}
                        center
                        title='Voice'
                        checked={this.state.voice}
                    />
                    <CheckBox
                        onPress={() => this.setState({video: !self.state.video})}
                        center
                        title='Video'
                        checked={this.state.video}
                    />
                    <Button
                        disabled={!(self.state.chat || self.state.video || self.state.voice)}
                        onPress={() => self.props.navigation.navigate('WaitingQueueVonlutary')}
                        large
                        backgroundColor = {'#28003d'}
                        icon={{name: 'check', type: 'font-awesome'}}
                        title='Confirm' 
                    />
                </View>
                <View style={styles.viewHelp}> 
                    <Button
                        onPress={() => self.props.navigation.navigate('Home')}
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
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
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

