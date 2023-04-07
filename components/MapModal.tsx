import React, { useState } from 'react';
import { View, Text, Modal, Button,TouchableOpacity,StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { Order } from '../types';

interface Props{
    modalVisible: boolean;
    setModalVisible:React.Dispatch<React.SetStateAction<boolean>>
    orders: Order[]
}

const MapModal:React.FC<Props> = ({modalVisible, setModalVisible,orders}) => {
  const [mapRegion, setMapRegion] = useState<Region>({
    latitude: 8.9945118,
    longitude: 38.7942374,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00391,
  });

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleMapRegionChange = (region: Region) => {
    setMapRegion(region);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableOpacity
           onPress={handlePress}
           style={styles.button}
      >
        <Text style={styles.buttonText}>Open Map</Text>
        </TouchableOpacity> */}
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1, height: '50%',width: '100%' }}
            region={mapRegion}
            onRegionChange={handleMapRegionChange}
          >
            {
                orders.map(order=>(
                    <Marker onPress={()=>{console.log('marker pressed!')}} key={order.orderId} coordinate={{ latitude: order.location.latitude, longitude:order.location.longitude }} />
                ))
            }
          </MapView>
          <Button color="#229865" title="Close Map" onPress={() => setModalVisible(false)} />
          
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
   
  
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
    btn:{

    }
  })
export default MapModal;