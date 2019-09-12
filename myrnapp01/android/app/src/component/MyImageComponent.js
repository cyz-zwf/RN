import React from "react"
import {View,Image,Text,Dimensions} from "react-native"



//自定义的图片组件:局部四个尺寸相关的属性

export default  class MyImageComponent  extends  React.Component{
    constructor(){
        super()
        this.state={
            originWidth:0, //原始的宽
            originHeight:0, //原始的高
            displayWidth:0 ,//要显示出来的宽
            displayHeight:0, //要显示出来的高
        }
    }
    componentDidMount(){
        console.log('我的图片组件挂载完成:',this.props.url)
        //获取图片的原始尺寸
        Image.getSize(this.props.url,(w,h)=>{
            let originWidth = w; //图片原始的宽
            let originHeight = h; //图片原始的高
            let displayWidth =  Dimensions.get("window").width  //要显示的宽度
            // 400         800     originWidth    displayWidth
            //-------  =  -----   ------------- = -------------  交叉相乘
            // 300          ?      originHeight       ?
            let displayHeight = originHeight * displayWidth / originWidth   // 要显示的高 
            console.log(originWidth,originHeight)
            console.log(displayWidth,displayHeight)
            this.setState({
                originWidth,
                originHeight,
                displayWidth,
                displayHeight,
            })

        })
    }
    render(){
        return(
            <Image style={{width:this.state.displayWidth,height:this.state.originHeight}} source={{uri:this.props.url}} />
        )
    }
}