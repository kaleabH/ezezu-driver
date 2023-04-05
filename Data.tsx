import 'react-native-get-random-values';
const uuid = require('uuid');
const dId = uuid.v4().toString();
console.log(dId);
import {Order} from "./types";
export const orders: Order[] = [
    {
        orderId: uuid.v4().toString(),
        customerId: uuid.v4().toString(),
        driverId:dId,
        location: {
            latitude: 8.990942640299304, 
            longitude: 38.79190043764691,
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4().toString(),
        customerId: uuid.v4().toString(),
        driverId:dId,
        location: {
            latitude: 8.991991742894522,
            longitude: 38.794443171625204,
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4().toString(),
        customerId: uuid.v4().toString(),
        driverId:dId,
        location: {
            latitude: 8.992076518729071,
            longitude: 38.794056933552554,
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4().toString(),
        customerId: uuid.v4().toString(),
        driverId:dId,
        location: {
            latitude: 8.992786515564198,
            longitude: 38.79449681580196,
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4().toString(),
        customerId: uuid.v4().toString(),
        driverId:dId,
        location: {
            latitude: 8.993199796662935, 
            longitude: 38.793284457407246,
        },
        orderedAt: new Date(),
        orderStatus: "delivered"
    },
    {
        orderId: uuid.v4().toString(),
        customerId: uuid.v4().toString(),
        driverId:dId,
        location: {
            latitude: 8.99168443032787,
            longitude: 38.792908948169945,
        },
        orderedAt: new Date(),
        orderStatus: "not-delivered"
    },
    {
        orderId: uuid.v4().toString(),
        customerId: uuid.v4().toString(),
        driverId:dId,
        location: {
            latitude: 8.992691142935952,
            longitude: 38.793166440218386,
        },
        orderedAt: new Date(),
        orderStatus: "not-delivered"
    }
]