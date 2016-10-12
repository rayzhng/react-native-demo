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
    WebView
} from 'react-native';

var di = require('Dimensions');
var window = di.get('window');

class Service extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{width:window.width,height:64,backgroundColor:'#00a9be',alignItems:'center'}}>
                    <Text style={{marginTop:(20+(44-17)/2),fontSize:17,color:'white'}}>服务</Text>
                </View>
                <WebView scrollEnabled = {true}
                        source = {{uri:'http://app.zt3000.com/architecture-business/html/services.html'}}
                        style = {{width: window.width,height : window.height-64-48}}>
                </WebView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// 输出组件类
module.exports = Service;
