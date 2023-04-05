import React, {useReducer} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import BottomNavigator from './navigations/BottomNavigator';
import { orders } from './Data';
import { OrderContext } from './context/orderContext';
import 'react-native-get-random-values'
import { Actions, Order } from './types';

export default function App() {
  
  return (
    <OrderContext.Provider value={orders}>
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
