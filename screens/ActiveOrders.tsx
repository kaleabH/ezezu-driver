import React from 'react'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import { Text } from 'react-native'

const ActiveOrders:React.FC<BottomTabBarProps<BottomTabParamsList,"ActiveOrders">>= () => {
  return (
    <Text>ActiveOrders</Text>
  )
}

export default ActiveOrders