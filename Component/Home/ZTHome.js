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
    ListView,
    AlertIOS,
    TouchableOpacity
} from 'react-native';

/**----导入外部的组件类---**/
var HomeDetail = require('./ZTHomeDetail');

// 导入json数据
var HomeData = require('./homedata.json'); // 数组

var di = require('Dimensions');
var window = di.get('window');

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        // 设置数据源
        const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: ds.cloneWithRows(HomeData['data']),  // cloneWithRows 放置数组
             loaded: false,
        };
    }

    render() {
        // console.log('this.state.dataSource :', this.state.dataSource);
        return (
            <View style={styles.container}>
                <View style={{width:window.width,height:64,backgroundColor:'#00a9be',alignItems:'center'}}>
                    <Text style={{marginTop:(20+(44-17)/2),fontSize:17,color:'white'}}>智通三千</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}  // 数据源
                    renderRow={this._renderRow.bind(this)}
                />
            </View>
        );
    }

    // 返回具体的cell
    _renderRow(rowData,sectionID,rowID) {
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={() => this.pushToDetail(rowData)}>
                <View style={styles.cellViewStyle}>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.startCity}</Text>
                        <Text style={styles.bottomTitleStyle}>{rowData.destCity}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    // 跳转到二级界面
    pushToDetail(rowData) {
        console.log('push', rowData.startCity, rowData.destCity);
        this.props.navigator.push(
            {
                component: HomeDetail, // 要跳转的版块
                title:'详情页',
                passProps: {
                    start:rowData.startCity,
                    dest:rowData.destCity
                }
            }
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
    cellViewStyle: {
        padding: 10,
        backgroundColor:'white',
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8',
        flexDirection:'row',
        width:window.width
    },
    topTitleStyle: {
        color:'red',
        fontSize:15,
        width:100,
        marginBottom:8
    },
    bottomTitleStyle: {
        color:'blue',
    }
});

// 输出组件类
module.exports = Home;
