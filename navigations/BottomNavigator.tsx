import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, {useReducer, useContext} from 'react';
import { BottomTabParamsList, Order, Actions } from '../types';
import ActiveOrders from '../screens/ActiveOrders';
import Profile from '../screens/Profile';
import OrderHistory from '../screens/OrderHistory';
import Icon from 'react-native-vector-icons/Ionicons';
import { OrderContext } from '../context/ordercontext';
interface Props{

}

interface Props {
  name: string;
  profilePicUrl: string;
  rating: number;
  deliveryCount: number;
  onLogoutPress: () => void;
}


const BottomTab = createBottomTabNavigator<BottomTabParamsList>();
const BottomNavigator:React.FC<Props> = () => {

  return (
    <BottomTab.Navigator
    initialRouteName='OrderHistory'
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