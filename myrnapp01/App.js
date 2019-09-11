/**
 * 创建路由器/导航器,注册给根组件
 *  
 * */
import React from 'react'
import {createAppContainer ,createStackNavigator } from 'react-navigation'
import LoginScreen from './android/app/src/component/LoginScreen';
import MainScreen from './android/app/src/component/MainScreen';
import ProductLiatScreen from './android/app/src/component/ProductListScreen';
import ProductDetailScreen from './android/app/src/component/ProductDetailScreen';

//创建路由器.导航器
let router = createStackNavigator({
  login:LoginScreen,
  main:MainScreen,
  productList:ProductLiatScreen,
  productdetail:ProductDetailScreen,
})

//创建根组件App时, 注册路由器/导航器
export default createAppContainer(router)