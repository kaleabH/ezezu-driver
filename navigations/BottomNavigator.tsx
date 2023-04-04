import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { BottomTabParamsList } from '../types';
import ActiveOrders from '../screens/ActiveOrders';
import Profile from '../screens/Profile';
import OrderHistory from '../screens/OrderHistory';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props{

}

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();
const BottomNavigator:React.FC<Props> = () => {
  return (
    <BottomTab.Navigator
        screenOptions={{
         headerStyle:{
            backgroundColor:"#229865",
         },
         headerTitleStyle:{fontSize: 23},
         headerTintColor:"white",
         tabBarActiveTintColor:"#229865",
         tabBarLabelStyle:{fontSize:15},
         tabBarStyle:{
            height:60,
            paddingBottom:5
         }
        }}
    >
        <BottomTab.Screen
           name="ActiveOrders"
           component={ActiveOrders}
           initialParams={}
           options={
            {
            title:"Active Orders",
            tabBarIcon: ({color})=>(
              <Icon name="cube" color={color} size={26} />
            )
            }
          }
        />
        <BottomTab.Screen
           name="OrderHistory"
           component={OrderHistory}
           initialParams={}
           options={
            {
            title:"Order History",
            tabBarIcon: ({color})=>(
              <Icon name="newspaper-sharp" color={color} size={26} />
            )
            }
          }
        />
        <BottomTab.Screen
           name="Profile"
           component={Profile}
           options={
            {
            title:"Profile",
            tabBarIcon: ({color})=>(
              <Icon name="person-circle" color={color} size={26} />
            )
            }
          }
        />
    </BottomTab.Navigator>
  )
}

export default BottomNavigator