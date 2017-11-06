import React from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

// import firebase from 'firebase';

import Login from './Login';
import Home from './Home';
import Chat from './Chat';
import Voice from './Voice';
import Video from './Video';

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const SignedIn = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Chat: {
        screen: Chat,
        navigationOptions: {
            headerTitle: 'Chat',
        },
    },
    Video: {
        screen: Video,
        navigationOptions: {
            headerTitle: 'Video',
        },
    },
    Voice: {
        screen: Voice,
        navigationOptions: {
            headerTitle: 'Voice',
        },
    },
    },  {
        initialRouteName: 'Home'
    });

const SignedOut = StackNavigator({
    Login: {
        screen: Login,
        headerMode: "none",
    },  
},
    {
        headerMode: "none",
        initialRouteName: 'Login'
    });
const createRootNavigator = () => {
    const isloggedIn = false;
    return StackNavigator(
    {
        SignedIn: {
        screen: SignedIn,
        navigationOptions: {
            gesturesEnabled: false
        }
        },
        SignedOut: {
        screen: SignedOut,
        navigationOptions: {
            gesturesEnabled: false
        }
        }
    },
    {
        headerMode: "none",
        mode: "modal",
        initialRouteName: isloggedIn ? "SignedIn" : "SignedOut"
    }
    );
}
export default createRootNavigator;