import { ParamListBase} from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";


export type BottomTabParamsList = {
    ActiveOrders: Order[];
    OrderHistory: Order[];
    Profile: undefined;
}

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