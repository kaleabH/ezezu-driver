import React, {useReducer} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import BottomNavigator from './navigations/BottomNavigator';
import { orders } from './Data';
import { OrderContext} from './context/orderContext';
import 'react-native-get-random-values'
import { Actions, Dispatch, Order} from './types';



export default function App() {
  const orderReducer= (state:Order[], action:Actions):Order[]=>{
    switch(action.type){
      case "delivered":
        return state.map(order=>{
          if(order.orderId === action.orderId){
            order.orderStatus = "delivered";
            
          }
          return order
        })
      case "not-delivered":
        return state.map(order=>{
          if(order.orderId === action.orderId){
            order.orderStatus = "not-delivered";
            
          }
          return order
        })
    }
    return state
  }
 
const [state, dispatch] = useReducer(orderReducer,orders)

  return (
    <OrderContext.Provider value={{state, dispatch}}>
    <PaperProvider>
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
    </PaperProvider>
    </OrderContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
