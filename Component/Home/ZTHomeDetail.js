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
    TouchableOpacity
} from 'react-native';

var di = require('Dimensions');
var window = di.get('window');

class HomeDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            start: null,
            dest: null
        };
    }

    componentDidMount() {
        console.log('componentDidMount1', this.props.start);
        console.log('componentDidMount2', this.props.dest);
        this.setState({
            start: this.props.start,
            dest: this.props.dest
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={{width:window.width,height:64,backgroundColor:'#00a9be',alignItems:'center'}}>
                    <Text style={{marginTop:(20+(44-17)/2),fontSize:17,color:'white'}}>货源详情</Text>
                </View>
                <TouchableOpacity style={{marginTop:200}} onPress={()=>{this.popTopHome()}}>
                    <Text style={styles.welcome}>
                        从{this.state.start} 
                    </Text>
                    <Text style={styles.welcome}>
                        到{this.state.dest}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    popTopHome(){
        this.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

// 输出组件类
module.exports = HomeDetail;
