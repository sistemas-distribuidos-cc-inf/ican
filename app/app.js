/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import createRootNavigator from './src/anonymous/Navigation';


export default class App extends Component {
  render() {
    const Layout = createRootNavigator();
    return (
      <Layout />
    );
  }
}
