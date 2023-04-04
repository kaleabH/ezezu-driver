const uuid = require('uuid');
const dId = uuid.v4();
import {Order} from "./types";
export const orders: Order[] = [
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:uuid.v4(),
        location: {
            longitude: "",
            latitude: "",
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:uuid.v4(),
        location: {
            longitude: "",
            latitude: "",
        },
        orderedAt: new Date(),
        orderStatus: "pending"
    },
    {
        orderId: uuid.v4(),
        customerId: uuid.v4(),
        driverId:uuid.v4(),
        location: {
            longitude: "",
            latitude: "",
        },
        orderedAt: new Date(),
        orderStatus: "delivered"
    }

]