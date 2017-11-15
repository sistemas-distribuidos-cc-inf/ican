import React from 'react';
import { View, Text, AsyncStorage} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

// import firebase from 'firebase';

import Login from '../view/anonymous/Login';
import Home from '../view/anonymous/Home';
import Chat from '../view/anonymous/Chat';
import Voice from '../view/anonymous/Voice';
import Video from '../view/anonymous/Video';
import Help from '../view/anonymous/Help';

import LoginVonlutary from '../view/vonlutary/LoginVonlutary';
import HomeVonlutary from '../view/vonlutary/HomeVonlutary';
import WaitingQueueVonlutary from '../view/vonlutary/WaitingQueueVonlutary';



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
        // headerMode: "none",        
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