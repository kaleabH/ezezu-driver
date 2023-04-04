import { NavigationContainer } from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import { StyleSheet } from 'react-native';
import BottomNavigator from './navigations/BottomNavigator';
import {createContext} from 'react';
import { Order } from './types';
import { orders } from './Data';
const OrderContext = createContext<Order[]| null>(null);



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
