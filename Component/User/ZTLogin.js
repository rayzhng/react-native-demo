
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
    Navigator
} from 'react-native';

var di = require('Dimensions');
var window = di.get('window');

var Main = require('../Main/ZTMain');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null
        };
        console.log('this.props 1: ', this.props);
    }

    _jumpToMain() {
        
        console.log('this is: ', this.props);
        console.log('this.props 2: ', this.props);
        this.props.navigator.push({
            component: Main,    // 要跳转的版块
            passProps: {
                name: '智通三千'
            },
            type: 'Normal'
        })
    }

    _jumpToRegist() {
        console.log('jumpToRegist');
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bgimage} source={require('./images/login_bg@2x.png')}>
                    <View style={styles.logincontainer}>
                        <Image style={styles.iconimage} source={require('./images/login_logo@2x.png')}>
                        </Image>
                        <View style={styles.loginbg}>
                            <View style={styles.inputcontainer}>
                                <View style={styles.inputarea}>
                                    <Image style={styles.inputicon} source={require('./images/login_phone@2x.png')}>
                                    </Image>
                                    <TextInput style={styles.inputstyle} placeholder='请输入手机号'>
                                    </TextInput>
                                </View>
                                <View style={styles.inputarea}>
                                    <Image style={styles.inputicon} source={require('./images/login_lock@2x.png')}>
                                    </Image>
                                    <TextInput style={styles.inputstyle} placeholder='请输入密码' password='true'>
                                    </TextInput>
                                </View>
                            </View>
                            <View style={styles.btncontainer}>
                                <TouchableHighlight style={styles.btnstylelogin} onPress={() => this._jumpToMain()}>
                                    <Text style={{color: 'white', fontSize: 17}}>登录</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btnstyleregist} onPress={() => this._jumpToRegist()}>
                                    <Text style={{color: 'white', fontSize: 17}}>注册</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Image>
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
    },
    bgimage: {
        alignItems: 'center'
    },
    logincontainer: {
        flexDirection: 'column'
    },
    iconimage: {
        marginTop: 130
    },
    loginbg: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#D2E6F0',
        width: window.width-40,
        height: 280,
        borderRadius: 15
    },
    inputcontainer: {
        flexDirection: 'column',
        width: window.width-70,
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 40,
        justifyContent: 'space-between'
    },
    inputarea: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginLeft: 0,
        marginRight: 0,
        height: 36,
        borderRadius: 3
    },
    inputicon: {
        marginLeft: 10
    },
    inputstyle: {
        backgroundColor: '#FFFFFF',
        fontSize: 15,
        width: 180,
        height: 36,
        marginLeft: 10,
        marginRight: 30
    },
    btncontainer: {
        flexDirection: 'column',
        width: window.width-70,
        height: 80,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 40,
        justifyContent: 'space-between'
    },
    btnstylelogin: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#57a9cd',
        marginLeft: 0,
        marginRight: 0,
        height: 36,
        borderRadius: 3
    },
    btnstyleregist: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5e73a9',
        marginLeft: 0,
        marginRight: 0,
        height: 36,
        borderRadius: 3
    }
});

// 输出组件类
module.exports = Login;
