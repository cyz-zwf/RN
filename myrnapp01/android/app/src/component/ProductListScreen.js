import React from 'react'
import {
    View,
    Text,
    Button,

} from 'react-native'
export default class ProductLiatScreen extends React.Component{
 constructor(){
     super()
 }
 jumpToProductDetail = (n)=>{
     this.props.navigation.navigate('productdetail',{pid: n ,age:18})
 }
 render(){
     return (
         <View>
             <Text>这里是商品列表</Text>
             <Button title="查看详情-10" onPress={ ()=>{this.jumpToProductDetail(10)} }/>
             <Button title="查看详情-15" onPress={ ()=>{this.jumpToProductDetail(15)} }/>
             <Button title="查看详情-20" onPress={ ()=>{this.jumpToProductDetail(20)} }/>
         </View>
     )
 }
}