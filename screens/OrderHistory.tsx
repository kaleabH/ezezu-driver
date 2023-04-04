import React from 'react'
import { Text } from 'react-native'
import { BottomTabBarProps, BottomTabParamsList } from '../types'

const OrderHistory:React.FC<BottomTabBarProps<BottomTabParamsList,"OrderHistory">>= () => {
  return (
    <Text>OrderHistory</Text>
  )
}

export default OrderHistory