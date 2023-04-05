import React, {useContext, useEffect} from 'react'
import { Text,View, FlatList, StyleSheet } from 'react-native'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import Card from '../components/Card'
import { OrderContext } from '../context/ordercontext'
import { useIsFocused } from '@react-navigation/native';

const OrderHistory:React.FC<BottomTabBarProps<BottomTabParamsList,"OrderHistory">>= ({route, navigation}) => {
 const {state, dispatch} = useContext(OrderContext)
 const isFocused = useIsFocused();
  useEffect(()=>{
  dispatch?.("delivered");
  // dispatch?.("not-delivered")
  console.log(state)
  },[isFocused])
  return (
    <View style={styles.container}>
    <Card>
      {
      (style)=>(
    <View style={style}>
      <FlatList
      style={styles.flatList}
  data={state}
  renderItem={
    ({item}) => (
      <View style={styles.listItem}>
        <Text>{item.customerId.substring(0,8)}</Text>
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
    width: "70%"
  }
})
export default OrderHistory