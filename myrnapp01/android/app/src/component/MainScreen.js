import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity

} from 'react-native'
export default class MainScreen extends React.Component{
    static navigationOptions = {
        title:"主菜单",
        headerRight:(
            <TouchableOpacity>
                <Image  style={{width:40 ,height:40,borderRadius:20}} source={require('../assest/img/user.png')}/>
            </TouchableOpacity>
        )
    }
 constructor(){
     super()
 }
 _onpress= ()=>{
     this.props.navigation.navigate('productList')
 }
 render(){
     return (
         <View>
             {/* 统计列表 */}
             <View style={{flexDirection:'row'}}>
                 <View style={ss.column}>
                    <Text style={[ss.txtDefault,ss.txtMiddle]}>上架商品总数</Text>
                    <Text style={[ss.txtLarger,ss.txtSuccess]}>24,380</Text>
                    <Text style={[ss.txtSmall,ss.txtDefault]}>+128%较上月</Text>
                 </View>
                 <View style={ss.column}>
                    <Text style={[ss.txtDefault,ss.txtMiddle]} >注册用户总数</Text>
                    <Text style={[ss.txtLarger,ss.txtDanger]} >1,965</Text>
                    <Text style={[ss.txtSmall,ss.txtDefault]}>+50%较上月</Text>
                 </View>
             </View>
             <View style={{flexDirection:'row'}}>
                 <View style={ss.column}>
                    <Text style={[ss.txtDefault,ss.txtMiddle]}>已完成的订单总数</Text>
                    <Text style={[ss.txtLarger,ss.txtDanger]}>951</Text>
                    <Text style={[ss.txtSmall,ss.txtDefault]}>+15%较上月</Text>
                 </View>
                 <View style={ss.column}>
                    <Text style={[ss.txtDefault,ss.txtMiddle]} >当日pc端PV量</Text>
                    <Text style={[ss.txtLarger,ss.txtDanger]} >14,281</Text>
                    <Text style={[ss.txtSmall,ss.txtDefault]}>+50%较昨日</Text>
                 </View>
             </View>
             <View style={{flexDirection:'row'}}>
                 <View style={ss.column}>
                    <Text style={[ss.txtDefault,ss.txtMiddle]}>移动端pv量</Text>
                    <Text style={[ss.txtLarger,ss.txtSuccess]}>29,315</Text>
                    <Text style={[ss.txtSmall,ss.txtDefault]}>+34%较昨日</Text>
                 </View>
                 <View style={ss.column}>
                    <Text style={[ss.txtDefault,ss.txtMiddle]} >app总下载量</Text>
                    <Text style={[ss.txtLarger,ss.txtSuccess]} >7,965</Text>
                    <Text style={[ss.txtSmall,ss.txtDefault]}>+18%较上周</Text>
                 </View>
             </View>
             {/* 主菜单 */}
             <View style={{flexDirection:'row'}}>
                 <View style={[ss.column,{borderBottomWidth:0,borderRightWidth:0}]}>
                     <TouchableOpacity onPress={this._onpress}>
                        <Image style={ss.icon} source={require('../assest/img/menu_product.jpg')} />
                        <Text style={[ss.txtMiddle,ss.txtDefault]}>商品管理</Text>
                    </TouchableOpacity>
                 </View>
                 <View style={[ss.column,{borderBottomWidth:0,borderRightWidth:0}]}>
                    <Image  style={ss.icon} source={require("../assest/img/menu_user.jpg")} />
                    <Text style={[ss.txtMiddle,ss.txtDefault]}>用户管理</Text>
                 </View>
             </View>
             <View style={{flexDirection:'row'}}>
                 <View style={[ss.column,{borderBottomWidth:0,borderRightWidth:0}]}>
                    <Image style={ss.icon} source={require('../assest/img/menu_refresh.jpg')} />
                    <Text style={[ss.txtMiddle,ss.txtDefault]}>订单管理</Text>
                 </View>
                 <View style={[ss.column,{borderBottomWidth:0,borderRightWidth:0}]}>
                    <Image  style={ss.icon} source={require("../assest/img/menu_userlock.jpg")} />
                    <Text style={[ss.txtMiddle,ss.txtDefault]}>首页管理</Text>
                 </View>
             </View>
         </View>
     )
 }
}
let ss= StyleSheet.create({
    column:{
        flex:1,
        alignItems:"center",
        padding:30,
        borderBottomColor:'#73879c',
        borderBottomWidth:1,
        borderRightColor:'#73879c',
        borderRightWidth:1
    },
    txtDefault:{
        color:"#73879c",
    },
    txtDanger:{
        color:"#E74c3c",
    },
    txtSuccess:{
        color:"#1add9c"
    },
    txtSmall:{
        fontSize:12,
    },
    txtMiddle:{
        fontSize:16,
    },
    txtLarger:{
        fontSize:28,
        fontWeight:'bold'
    },
    icon:{
        width:60,
        height:60,
    },
})