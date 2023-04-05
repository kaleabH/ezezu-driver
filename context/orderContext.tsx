import { Actions, Order } from '../types';
import { orders } from '../Data';
import {createContext} from 'react';
export const OrderContext = createContext<{state: Order[],dispatch: React.Dispatch<Actions>|null}>({state:orders, dispatch:null});