import 'react-native-get-random-values';
const uuid = require('uuid');
const dId = uuid.v4();
import {Order} from "./types";
export const orders: Order[] = [
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:dId,
        location: {
           
            longitude: "38.76743372367542",
            latitude: " 9.005319815202018",
            
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:dId,
        location: {
           
            longitude: " 38.7676390423133",
            latitude: " 9.003784257841234",
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:dId,
        location: {
            longitude: "38.6466",
            latitude: "9.0321",
        },
        orderedAt: new Date(),
        orderStatus: "delivered"
    },
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:dId,
        location: {
            longitude: "38.7866",
            latitude: "9.0325",
        },
        orderedAt: new Date(),
        orderStatus: "not-delivered"
    },
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:dId,
        location: {
            longitude: "38.6466",
            latitude: "9.0342",
        },
        orderedAt: new Date(),
        orderStatus: "not-delivered"
    }

]