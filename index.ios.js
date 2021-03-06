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
  Image,
  Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './boy'
export default class GithubApp extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedTab:'tb_popular'
    }
  }
  render() {
    return (
      <View style={styles.container}>
      {/*
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_popular'}
            selectedTitleStyle={{color:'red'}}
            title='最热'
            renderIcon={()=><Image style={styles.image} source={require('./res/images/ic_popular.png')}/>}
            renderSelectedIcon={()=><Image  style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_popular.png')}/>}
            badgeText='1'
            onPress={()=>this.setState({selectedTab:'tb_popular'})}
            >
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
          selected={this.state.selectedTab === 'tb_trending'}
          selectedTitleStyle={{color:'yellow'}}
          title='趋势'
          renderIcon={()=><Image style={styles.image} source={require('./res/images/ic_trending.png')}/>}
          renderSelectedIcon={()=><Image  style={[styles.image,{tintColor:'yellow'}]} source={require('./res/images/ic_trending.png')}/>}
          onPress={()=>this.setState({selectedTab:'tb_trending'})}
          >
          <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_favorite'}
            selectedTitleStyle={{color:'red'}}
            title='收藏'
            renderIcon={()=><Image style={styles.image} source={require('./res/images/ic_favorite.png')}/>}
            renderSelectedIcon={()=><Image  style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_favorite.png')}/>}
            badgeText='1'
            onPress={()=>this.setState({selectedTab:'tb_favorite'})}
            >
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'tb_my'}
            selectedTitleStyle={{color:'red'}}
            title='我的'
            renderIcon={()=><Image style={styles.image} source={require('./res/images/ic_my.png')}/>}
            renderSelectedIcon={()=><Image  style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_my.png')}/>}
            badgeText='1'
            onPress={()=>this.setState({selectedTab:'tb_my'})}
            >
            <View style={styles.page1}></View>
          </TabNavigator.Item>
        </TabNavigator>*/}
        <Navigator
          initialRoute={{component:Boy}}
          renderScene={(route,navigator)=>{
            let Component=route.component;
            return <Component navigator={navigator} {...route.params}/>
          }}
        ></Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1:{
    flex:1,
    backgroundColor:'red'
  },
  page2:{
    flex:1,
    backgroundColor:'yellow'
  },
  image:{
    height:22,
    width:22
  }
});

AppRegistry.registerComponent('GithubApp', () => GithubApp);
