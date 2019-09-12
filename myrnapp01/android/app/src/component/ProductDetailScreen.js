import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Button
} from 'react-native'
import CarouselComponent from './CarouselComponent';

export default class ProductDetailScreen extends React.Component{
    static navigationOptions = { //设置页头 
        title:'商品详情'
    } 
 constructor(){
     super()
     this.state={
         product : {},
     }
 }
 componentDidMount(){
     //1.组件挂载完成.读取路由参数 pid
     let pid=this.props.navigation.getParam('pid')
     //2.再根据商品编号,异步查询商品详情
     let url = 'http://www.codeboy.com/data/product/details.php?lid='+pid
     //3.发送请求
     fetch(url).then((res)=>{
         return res.json()
     }).then((body)=>{
         //console.log(body)
         this.setState({product:body.details})
     })
     //console.log(this.props.navigation)
     console.log(this.props.navigation.getParam('pid'))
     //console.log(this.props.navigation.getParam('age'))
     //alert(this.props.navigation.getParam('pid'))
 }
 render(){
     return (
         <View style={{flex:1 ,padding:10}}>
             <ScrollView>
                <Text style={ss.txt}>产品型号 : {this.state.product.lname}</Text>
                <View style={ss.hr}></View>
                <CarouselComponent picList={this.state.product.picList}></CarouselComponent>
             </ScrollView>
                <Button title="添加到购物车"/>
         </View>
     )
 }
}
let ss= StyleSheet.create({
    txt:{
        fontSize:16
    },
    hr:{
        height:0,
        borderTopColor:"#73879c",
        borderTopWidth:1,
        marginVertical:10
    },


})