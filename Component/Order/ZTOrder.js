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
    TouchableOpacity,
    ListView,
    AlertIOS,
    TextInput
} from 'react-native';

var di = require('Dimensions');
var window = di.get('window');

var NetUtil = require('./NetUtil');

class Order extends React.Component {

    constructor(props) {
        super(props);
        
        // 设置数据源
        const ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
        this.state = {
            dataSource: ds,  // cloneWithRows 放置数组
            loaded: false,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width:window.width,height:64,backgroundColor:'#00a9be',alignItems:'center'}}>
                    <Text style={{marginTop:(20+(44-17)/2),fontSize:17,color:'white'}}>订单</Text>
                </View>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    placeholder="搜索"
                    style={{width:window.width,height:64,fontSize:15}}
                    onChangeText={(text)=>this.updateListData(text)}
                />
                <ListView
                    dataSource={this.state.dataSource}  // 数据源
                    renderRow={this._renderRow}
                />
            </View>
        );
    }


    /**
     * 显示搜索结果
     * @param result
     */
    updateListData(keyword) {
        this.fetchData(keyword);
    }

    fetchData(keyword) {

        var util = new NetUtil();

        if(!keyword) {
            keyword = '连城诀';
        }

        var requestUrl = "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key="+encodeURI(keyword)+"&bk_length=600";
        return (
            util.get(requestUrl, (response) => {
                // console.log(response)
                this.setState({
                    //设置数据源刷新界面
                    dataSource: this.state.dataSource.cloneWithRows(response['card']),
                    //改变加载ListView
                    load: true
                })
            }, (error) => {
                console.log('加载数据error==>' + error);
            })
        );
    }

    // 返回具体的cell
    _renderRow(rowData,sectionID,rowID) {
        console.log('rowData', rowData);
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{console.log(rowData.key)}}>
                <View style={styles.cellViewStyle}>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.bottomTitleStyle}>{rowData.name}</Text>
                        <Text style={styles.bottomTitleStyle}>{rowData.value[0]}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
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
module.exports = Order;
