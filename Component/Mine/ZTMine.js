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
    ScrollView,
    Image
} from 'react-native';

var di = require('Dimensions');
var window = di.get('window');

class Mine extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{width:window.width,height:64,backgroundColor:'#00a9be',alignItems:'center'}}>
                    <Text style={{marginTop:(20+(44-17)/2),fontSize:17,color:'white'}}>个人中心</Text>
                </View>
                <ScrollView style={{width:window.width, height:window.height-64-48}}>
                    <View style={{width:window.width,height:144.5,backgroundColor:'#00a9be',flexDirection:'column',alignItems:'center'}}>
                        <Image style={{marginTop:10,width:80,height:80,borderRadius:40}} source={require('./images/big--photo@2x.png')}></Image>
                        <Text style={{marginTop:8,fontSize:16,color:'white'}}>康师傅</Text>
                        <Text style={{marginTop:3,fontSize:12,color:'#015863'}}>联系方式：13151555645</Text>
                    </View>
                    {this._renderPointsPocketView()}
                    {this._renderSettingsView()}
                </ScrollView>
            </View>
        );
    }

    _renderPointsPocketView() {
        console.log('_renderPointsPocketView');
        return (
            <View style={styles.pointspocketview}>
                <View style={styles.pointspocketstyle}>
                    <Image style={{marginLeft:40}} source={require('./images/integral@2x.png')}></Image>
                    <Text style={{marginLeft:5}}>积分：</Text>
                    <Text style={{marginLeft:1}}>40</Text>
                </View>

                <View style={styles.pointspocketstyle}>
                    <Image style={{marginLeft:40}} source={require('./images/integral@2x.png')}></Image>
                    <Text style={{marginLeft:5}}>我的钱包</Text>
                </View>
            </View>
        );
    }

    _renderSettingsView() {
        console.log('_renderSettingsView');
        return (
            <View style={styles.settingsview}>
                <View style={styles.settingscolumnstyle}>
                    <View style={styles.settingsrowstyle}>
                        <Image style={{marginLeft:20}} source={require('./images/icon01@2x.png')}></Image>
                        <Text style={{marginLeft:10, width:window.width-100}}>发布车源</Text>
                        <Image style={{marginRight:15}} source={require('./images/arrow@2x.png')}></Image>
                    </View>
                    <View style={styles.settingsrowstyle}>
                        <Image style={{marginLeft:20}} source={require('./images/icon02@2x.png')}></Image>
                        <Text style={{marginLeft:10, width:window.width-100}}>分享</Text>
                        <Image style={{marginRight:15}} source={require('./images/arrow@2x.png')}></Image>
                    </View>
                    <View style={styles.settingsrowstyle}>
                        <Image style={{marginLeft:20}} source={require('./images/icon03@2x.png')}></Image>
                        <Text style={{marginLeft:10, width:window.width-100}}>常见问题</Text>
                        <Image style={{marginRight:15}} source={require('./images/arrow@2x.png')}></Image>
                    </View>
                    <View style={styles.settingsrowstyle}>
                        <Image style={{marginLeft:20}} source={require('./images/icon04@2x.png')}></Image>
                        <Text style={{marginLeft:10, width:window.width-100}}>问题反馈</Text>
                        <Image style={{marginRight:15}} source={require('./images/arrow@2x.png')}></Image>
                    </View>

                    <View style={styles.settingsrowstyle}>
                        <Image style={{marginLeft:20}} source={require('./images/icon05@2x.png')}></Image>
                        <Text style={{marginLeft:10, width:window.width-100}}>一键客服</Text>
                        <Image style={{marginRight:15}} source={require('./images/arrow@2x.png')}></Image>
                    </View>
                    <View style={styles.settingsrowstyle}>
                        <Image style={{marginLeft:20}} source={require('./images/icon06@2x.png')}></Image>
                        <Text style={{marginLeft:10, width:window.width-100}}>隐私条款</Text>
                        <Image style={{marginRight:15}} source={require('./images/arrow@2x.png')}></Image>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        textAlign: 'center'
    },
    pointspocketview: {
        flexDirection: 'row',
        justifyContent: 'center',
        height:55
    },
    pointspocketstyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    settingsview: {
        flexDirection: 'column',
        justifyContent: 'center',
        height:55
    },
    settingscolumnstyle: {
        marginTop:200,
        justifyContent: 'center',
        height:55
    },
    settingsrowstyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height:40
    },
});

// 输出组件类
module.exports = Mine;
