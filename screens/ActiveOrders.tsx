import React,{useContext, useEffect, useState} from 'react'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import { View, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native'
import { OrderContext } from '../context/orderContext';
import Card from '../components/Card'
import { useIsFocused } from '@react-navigation/native';
import {FAB } from 'react-native-paper';
import MapModal from '../components/MapModal';

const ActiveOrders:React.FC<BottomTabBarProps<BottomTabParamsList,"ActiveOrders">>= ({route, navigation,}) => {
  const state = useContext(OrderContext)
 const [orders, setOrders] = useState(state);
 const [modalVisible, setModalVisible] = useState(false);
 const [modalOrders, setModalOrders] = useState(orders)

 const [isExtended, setIsExtended] = React.useState(true);
//  const fabStyle = { [animateFrom]: 16 };

  const isFocused = useIsFocused();

  useEffect(()=>{
  setOrders(state.filter(order=>order.orderStatus ==="pending"))

  setModalOrders(orders)

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
      <TouchableOpacity 
      onPress={
        ()=>{
          setModalOrders([item])
          setModalVisible(true) 
           }
         }
       style={styles.listItem}>
        <Text>{item.customerId.substring(0,8)}</Text>
        <Text style={{color: "green"}}>{item.orderStatus}</Text>
      </TouchableOpacity>
    )
  }
  keyExtractor={item => item.orderId}
/>
    </View>
      )}
    </Card>
    <FAB
        icon={'map-marker-outline'}
        color={'white'}
        onPress={() =>{ 
          setModalOrders(orders)
          setModalVisible(true)
        }}
        style={[styles.fabStyle]}
      />
      <MapModal modalVisible={modalVisible} setModalVisible={setModalVisible} orders={modalOrders}/>
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
  fabStyle: {
    top:430,
    left:210,
    position: 'absolute',
    backgroundColor: "#229865",
    color:"white"
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    width: "70%",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  }
})

export default ActiveOrders