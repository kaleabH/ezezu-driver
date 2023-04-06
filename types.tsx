import { ParamListBase} from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";


export type BottomTabParamsList = {
    ActiveOrders: Order[];
    OrderHistory: Order[];
    Profile: undefined;
}

// export interface ActiveOrdersType extends Order{
//     orderStatus: "pending"
//   }
  
// export interface OrderHistoryType extends Order{
//     orderStatus: "delivered" | "not-delivered"
//   }
  
export  type Actions = {type:"pending"; orderId: string;}
                 |{type:"delivered"; orderId:string;}| {type: "not-delivered"; orderId: string;}

export type Dispatch = React.Dispatch<Actions|null>
export type BottomTabBarProps<T extends ParamListBase, K  extends keyof T> = BottomTabScreenProps<T, K>

export interface Order {
    orderId: string;
    customerId: string;
    driverId:string| null;
    location: {
        latitude: number;
        longitude: number;
    }
    orderedAt: Date;
    orderStatus: "pending"| "delivered"|"not-delivered";
}