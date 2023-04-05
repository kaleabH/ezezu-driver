import React,{useContext, useEffect} from 'react'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { OrderContext } from '../context/orderContext'
import Card from '../components/Card'
import { useIsFocused } from '@react-navigation/native';
import MapModal from '../components/MapModal'


const ActiveOrders:React.FC<BottomTabBarProps<BottomTabParamsList,"ActiveOrders">>= ({route, navigation}) => {
  const {state, dispatch} = useContext(OrderContext)
  const isFocused = useIsFocused();

  // console.log(navigation.getState)
  useEffect(()=>{
    dispatch?.("pending");
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
        <Text style={{color: "green"}}>{item.orderStatus}</Text>
      </View>
    )
  }
  keyExtractor={item => item.orderId}
/>
    </View>
      )}
    </Card>
       <View style={styles.buttoncontainer}>
        
        <TouchableOpacity style={styles.button}>
            <MapModal />
        </TouchableOpacity>
      </View>
{/* 
      <View style={{ flex: 1 }}>
        <MapModal />
    </View> */}
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
    width: "70%",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  buttoncontainer: {
    position: 'absolute',
    bottom: -650,
    left: 0,
    right: 20,
    alignItems: 'flex-end',
  },
  button: {
    borderRadius: 25,
    backgroundColor: "#229865",
    height: 50,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})

export default ActiveOrders