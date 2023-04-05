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
  
export  type Actions = "pending"
                 | "delivered"| "not-delivered"| any

type dispatch = React.Dispatch<Actions>
export type BottomTabBarProps<T extends ParamListBase, K  extends keyof T> = BottomTabScreenProps<T, K>

export interface Order {
    orderId: string;
    customerId: string;
    driverId:string| null;
    location: {
        longitude: string;
        latitude: string;
    }
    orderedAt: Date;
    orderStatus: "pending"| "delivered"|"not-delivered";
}