import React from "react"
import {View,Image,Dimensions,StyleSheet} from "react-native"


export default class  CarouselComponent extends React.Component{
    timer =null //轮播广告的引擎--定时器

    constructor(){
        super()
        this.state={
            curIndex:0 //当前要显示的轮播图片下标
        }
    }
    componentDidMount(){
        //轮播广告挂载完成
        console.log(this.props.picList)//undefined
        //注意:轮播广告组件挂载是,商品数据还未请求到!
    }
    componentWillUnmount(){
        //解决内存泄漏
        //组件即将被卸载,必须销毁关联的异步对象,如定时器
        if(this.timer){
            clearInterval(this.timer)
        }
    }
    render(){
        let server="http://www.codeboy.com/"
        if(this.props.picList){
            //父组件提供的图片列表,开发启动定时器
            if(this.timer==null){
                this.timer=setInterval(()=>{
                    let curIndex = this.state.curIndex
                    curIndex ++ ;
                    curIndex=curIndex>=this.props.picList.length?0:curIndex;
                    this.setState({curIndex})
                },2000)
            }
            return (
               <Image  style={ss.full} source={{ uri:server+this.props.picList[this.state.curIndex].md }} /> 
            )  
        }else{
            return (
                <Image style={ss.full} source={require("../assest/img/default.jpg")}/>
            )
        } 
    }
}
let ss=StyleSheet.create({
    full:{ //设置图片的尺寸. 宽高都与窗口相同
        width:Dimensions.get('window').width-20,
        height:Dimensions.get('window').width-20,

    }
})