import React from 'react'
import {
    View,
    Text
} from 'react-native'

export default class ProductDetailScreen extends React.Component{
 constructor(){
     super()
 }
 componentDidMount(){
     //组件挂载完成.读取路由参数
     console.log(this.props.navigation)
     console.log(this.props.navigation.getParam('pid'))
     console.log(this.props.navigation.getParam('age'))
     alert(this.props.navigation.getParam('pid'))
 }
 render(){
     return (
         <View>
             <Text>这里是商品详情</Text>
         </View>
     )
 }
}