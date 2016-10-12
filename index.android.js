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
  Navigator,
  TouchableOpacity
} from 'react-native';

/**-------导入外部的组件类---------**/
import ZTLogin from './Component/User/ZTLogin'

const defaultRoute = {
  component: ZTLogin
};

class ZT3000Android extends Component {
  render() {
    return (
    <Navigator
        initialRoute={{ name: 'ZTLogin', component: ZTLogin }}   
        configureScene={(route) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
        }}
      />
    );
  }

}

AppRegistry.registerComponent('zt3000demo', () => ZT3000Android);


