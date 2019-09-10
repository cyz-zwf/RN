import React from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Image,
    StyleSheet

} from 'react-native'
export default class LoginScreen extends React.Component{
 constructor(){
     super()
     this.state= { 
         uname:"",
         upwd:""
     }
 }
 doUnameChange= (uname)=>{
    this.setState({
        uname
    })
 }
 doUpwdChange= (upwd)=>{
    this.setState({ upwd})
 }
 doLogin=()=>{
     alert(this.state.uname + this.state.upwd)
     //发送请求
 }
 render(){
     return (
         <View  style={ss.container}>
             <TextInput placeholder="请输入用户名"  style={ss.input} value={this.state.uname} onChangeText={this.doUnameChange}/>    
             <TextInput placeholder="请输入密码" secureTextEntry={true} style={[ss.input,{marginBottom:32}]} value={this.state.upwd} onChangeText={this.doUpwdChange}/>  
             <Button title="登录" style={ss.btn} onPress={this.doLogin}/>
             <View style={ss.row}>
               <Image source={ require("../assest/img/logo.png") }/>
               <Text style={ss.title}>后台管理系统</Text>     
            </View>  
            <Text style={ss.copyright}>©2017 版权所有,codeBoy.com</Text>
        </View>
     )
 }
}

let ss=StyleSheet.create({
    container:{
        padding:30
    },
    input:{
        fontSize:16,
        color:'#73879c',
        borderBottomColor:'#73879c',
        marginBottom:14,
        borderBottomWidth:1,
        marginBottom:12,
    },
    btn:{
        fontSize:16,
        // marginVertical:40
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginVertical:50,
    },
    title:{
        fontSize:30,
        color:'#73879c'
    },
    copyright:{
        fontSize:16,
        color:"#73879c",
        textAlign:"center"
    }

})