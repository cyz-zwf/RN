import React from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Image,
    FlatList,
    ActivityIndicator,

} from 'react-native'
export default class ProductLiatScreen extends React.Component{
    static navigationOptions = { //导航设置(页头设置)
        title:"商品列表",
        headerRight:(
            <TouchableOpacity>
                <Image  style={{width:40 ,height:40,borderRadius:20}} source={require('../assest/img/user.png')}/>
            </TouchableOpacity>
        )
    }

    pno = 0 ; //要加载的商品页号.,此数据无需绑定到视图
    hasMore = true ; //还有更多数据可供加载吗? 
    constructor(){
     super()
     this.state ={
         plist:[] //商品列表
     }
    }
    loadData(){//加载下一页的商品数据
        this.pno++
        console.log('开始加载商品数据' ,this.pno)
        let url= "http://www.codeboy.com/data/product/list.php?pno="+this.pno
        //使用w3c的新技术,fetch API异步获取请求
        fetch(url).then( (res)=>{
            return res.json()
        }).then( (body)=>{
            //console.log(data)
            console.log(body.data) 
            let plist=this.state.plist.concat(body.data)
            this.setState({
                plist
            })
        })

    }
    //组件挂载完立即执行一次数据获取
    componentDidMount(){
        this.loadData()
    }


//  jumpToProductDetail = (n)=>{
//      this.props.navigation.navigate('productdetail',{pid: n ,age:18})
//  }
 _renderItem= (itemData)=>{
     let p =itemData.item  //一个商品对象
     let server = 'http://www.codeboy.com/'
     return (
         <View style={{flexDirection:'row',alignItems:"center"}}>
             <Image style={{width:100,height:100}} source={{uri: server+p.pic}} />
             <View style={{flex:1,justifyContent:"center"}}>
             <Text numberOfLines={1} style={{fontSize:18}}>{p.title}</Text>
             <Text style={{color:'#f00',fontSize:16}}>价格:{p.price}</Text>
             </View>
             <Button title="查看详情" style={{width:10}} onPress={ ()=>{this.props.navigation.navigate('productdetail',{pid: p.lid })}}/>
         </View>
     )
 }
 _getSepor=()=>{
     return (
         <View style={{height:0,borderTopWidth:1 , borderTopColor:"#73879c"}}></View>
     )
 }
 _getFooter=()=>{
    return (
        <View >
            <ActivityIndicator size="large" />
            <Text style={{textAlign:"center"}}>加载中...</Text>
        </View>
    )
 }
 render(){
     return (
         <View>
             {/* <Text>这里是商品列表</Text>
             <Button title="查看详情-10" onPress={ ()=>{this.jumpToProductDetail(10)} }/>
             <Button title="查看详情-15" onPress={ ()=>{this.jumpToProductDetail(15)} }/>
             <Button title="查看详情-20" onPress={ ()=>{this.jumpToProductDetail(20)} }/> */}
             <FlatList data ={this.state.plist} renderItem={this._renderItem} 
             keyExtractor={(item,index)=>{item.lid}} ItemSeparatorComponent={this._getSepor} ListFooterComponent={this._getFooter}/>
         </View>
     )
 }
}