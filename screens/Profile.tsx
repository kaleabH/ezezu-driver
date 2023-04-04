import React from 'react'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import {Text} from 'react-native'

const Profile:React.FC<BottomTabBarProps<BottomTabParamsList,"Profile">>= () => {
  return (
    <Text>Profile</Text>
  )
}

export default Profile