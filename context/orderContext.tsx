import { Actions, Order, Dispatch } from '../types';
import { orders } from '../Data';
import {createContext} from 'react';





export const OrderContext = createContext<{state:Order[], dispatch: Dispatch<Actions>|undefined}>({state:orders, dispatch: undefined});