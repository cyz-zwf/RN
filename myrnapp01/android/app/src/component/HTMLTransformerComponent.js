import React from "react"
import {View,Image,Text} from "react-native"
import MyImageComponent from "./MyImageComponent";


// 转换html 复责吧<img>转换为<Image/>

export default  class TransformComponent  extends  React.Component{
    componentDidMount(){
        console.log("转换qi" , this.props.html)
    }
    render(){
        if(this.props.html){
            console.log(this.props.html)//提取出html字符串中所有的图片路径
            //查找img.....jpg
            let list=this.props.html.match(/img\/\S+\.jpg/g)
            let server="http://www.codeboy.com/"
            return (
                <View> 
                    {
                        list.map((str,i)=>{ //映射
                            return <MyImageComponent key={i} url={server+str} />
                     // <Image style={{width:400,height:400}} source={{uri:server+str}}/>
                        })
                    }
                </View>
            )
        }else{
            return (
            <View>
                <Text>商品详情加载中...</Text>
            </View>
            )
        }   
    }
}