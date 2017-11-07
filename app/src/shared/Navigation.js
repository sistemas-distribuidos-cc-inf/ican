import React from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

// import firebase from 'firebase';

import Login from '../anonymous/Login';
import Home from '../anonymous/Home';
import Chat from '../anonymous/Chat';
import Voice from '../anonymous/Voice';
import Video from '../anonymous/Video';
import Help from '../anonymous/Help';

import LoginVonlutary from '../vonlutary/LoginVonlutary';
import HomeVonlutary from '../vonlutary/HomeVonlutary';
import WaitingQueueVonlutary from '../vonlutary/WaitingQueueVonlutary';



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
    Help: {
        screen: Help,
        navigationOptions: {
            headerTitle: 'Help',
        },
    },
    HomeVonlutary: {
        screen: HomeVonlutary,
        navigationOptions: {
            headerTitle: 'Home Vonlutary',
        },
    },
    WaitingQueueVonlutary: {
        screen: WaitingQueueVonlutary,
        navigationOptions: {
            headerTitle: 'Waiting',
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
    LoginVonlutary: {
        screen: LoginVonlutary,
        headerMode: "none",
    },  
},
    {
        headerMode: "none",
        initialRouteName: 'LoginVonlutary'
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