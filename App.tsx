import React, {useReducer} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import BottomNavigator from './navigations/BottomNavigator';
import { orders } from './Data';
import { OrderContext } from './context/orderContext'
import 'react-native-get-random-values'
import { Actions, Order } from './types';

const orderReducer = (state: Order[], actions: Actions)=>{
  switch(actions){
    case "pending":
      console.log("pending");
      console.log(state)
      return state.filter(order=>order.orderStatus==="pending")
    case "delivered" :
      console.log("delivered");
      console.log(state)
      return state.filter(order=>order.orderStatus ==="delivered"||"not-delivered")
      default:
       return state;
  }

}
export default function App() {


  const [state, dispatch] = useReducer(orderReducer,orders);
 


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
