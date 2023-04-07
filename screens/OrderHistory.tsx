import React, {useContext, useEffect, useState} from 'react'
import { Text,View, FlatList, StyleSheet } from 'react-native'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import Card from '../components/Card'
import { OrderContext } from '../context/orderContext';
import { useIsFocused } from '@react-navigation/native';

const OrderHistory:React.FC<BottomTabBarProps<BottomTabParamsList,"OrderHistory">>= ({route, navigation}) => {
 const {state, dispatch} = useContext(OrderContext)
 const [orders, setOrders] = useState(state);
 const isFocused = useIsFocused();
  useEffect(()=>{
  setOrders(state.filter(order=>(order.orderStatus !=="pending")))
  // setOrders(prevOrders=>({...prevOrders,...state.filter(order=>(order.orderStatus ==="not-delivered"))}))
  console.log(orders)
  },[isFocused])
  return (
    <View style={styles.container}>
    <Card>
      {
      (style)=>(
    <View style={style}>
      <FlatList
      style={styles.flatList}
  data={orders}
  renderItem={
    ({item}) => (
      <View style={styles.listItem}>
        <Text>{item.customerId.substring(0,8)}</Text>
        <Text>{item.orderedAt.toDateString()}</Text>
        <Text style={{color: item.orderStatus==="delivered" ? "green": "red"}}>{item.orderStatus}</Text>
      </View>
    )
  }
  keyExtractor={item => item.orderId}
/>
    </View>
      )}
    </Card>
    </View>
  )

}

const styles = StyleSheet.create({
  container:{
    alignSelf:"center",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    // flex:1,
    flexDirection:'row'
  },
  flatList:{
    width:"100%"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    width: 300,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  }
})
export default OrderHistory