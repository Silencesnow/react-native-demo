import React,{Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import Boy from './boy'
import NavigationBar from './NavigationBar'
export default class Girl extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  renderButton(image){
    return <TouchableOpacity
      onPress={()=>{
        this.props.navigator.pop();
      }}
      >
      <Image style={{width:22,height:22,margin:5}} source={image}/>
    </TouchableOpacity>
  }
  render(){

    return (
      <View style={styles.container}>
        <NavigationBar
          title='Girl'
          style={{
            backgroundColor:'#ee6363'
          }}
          leftButton={
            this.renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))
          }
          rightButton={
            this.renderButton(require('./res/images/ic_star.png'))
          }
        />
        <Text style={styles.text}>I am girl</Text>
        <Text style={styles.text}>收到了男孩送的：{this.props.word}</Text>
        <Text style={styles.text}
          onPress={()=>{
            this.props.onCallBack('巧克力')
            this.props.navigator.pop()
          }}>送男孩巧克力</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  text:{
    fontSize:20
  }
})
