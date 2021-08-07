import { View, Text} from "@tarojs/components"
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import '../index/header.less'
import './hospital.css'
import TabBar from '../common/tabBar'
import { AtSearchBar ,AtAccordion,AtList,AtListItem,AtButton} from 'taro-ui'

class Index extends Component{

  handleClick(value){
    this.setState({
      open: value
    })
  }

  render(){
    return(
     <View>
      <AtSearchBar
        actionName='搜索'
        placeholder='搜索国医堂'
        maxLength='50'
        className='search-input'
      />

       <view>
         <view className='condition-layout'>
           <View className='condition-item'>
             <view className='hospital'>
               <text>医院：</text>
             </view>
           </View>
           <View className='condition-select'>
             <AtAccordion
               title='筛选'
               className='selected-btn'
               onClick={this.handleClick.bind(this)}
             >
               <AtList hasBorder={false}>
                 <AtListItem
                   title='评分'
                 />
                 <AtListItem
                   title='剩余量'
                 />
               </AtList>
             </AtAccordion>
           </View>
         </view>
       </view>
       <TabBar tabBarCurrent={0}/>
     </View>
    )
  }
}

export default Index
