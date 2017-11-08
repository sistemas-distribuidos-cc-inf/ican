/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import createRootNavigator from './src/controller/Navigation';
import firebase  from './src/controller/Firebase';


export default class App extends Component {
  render() {
    const Layout = createRootNavigator();
    return (
      <Layout />
    );
  }
}
