import { Actions, Order } from '../types';
import { orders } from '../Data';
import {createContext} from 'react';
export const OrderContext = createContext<Order[]>(orders);