/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// npm install

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,   // 判断当前运行的系统
    Navigator
} from 'react-native';


/**-----导入外部的组件类------**/
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/ZTHome');
var Order = require('../Order/ZTOrder');
var Service = require('../Service/ZTService');
var Mine = require('../Mine/ZTMine');

class Main extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
           selectedTab:'home' // 默认是第一个
        };
    }

    render() {
        return (
            <TabNavigator>
                {/*--首页--*/}
                <TabNavigator.Item
                  title="找货"
                  renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.iconStyle}/>} // 图标
                  renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                  onPress={()=>{this.setState({selectedTab:'home'})}}
                  selected={this.state.selectedTab === 'home'}
                >
                    <Navigator
                        initialRoute={{name:'找货',component:Home}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--订单--*/}
                <TabNavigator.Item
                    title="订单"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'order'})}}
                    selected={this.state.selectedTab === 'order'}
                >
                    <Navigator
                        initialRoute={{name:'订单',component:Order}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--服务--*/}
                <TabNavigator.Item
                    title="服务"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'service'})}}
                    selected={this.state.selectedTab === 'service'}
                >
                    <Navigator
                        initialRoute={{name:'服务',component:Service}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

                {/*--我的--*/}
                <TabNavigator.Item
                    title="我的"
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.iconStyle}/>} // 图标
                    renderSelectedIcon={() =><Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.iconStyle}/>}   // 选中的图标
                    onPress={()=>{this.setState({selectedTab:'mine'})}}
                    selected={this.state.selectedTab === 'mine'}
                >
                    <Navigator
                        initialRoute={{name:'我的',component:Mine}}
                        configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: Platform.OS === 'ios' ? 30 : 25,
        height:Platform.OS === 'ios' ? 30 : 25
    }
});

// 输出组件类
module.exports = Main;
