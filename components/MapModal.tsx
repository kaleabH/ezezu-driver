import React, { useState } from 'react';
import { View, Text, Modal, Button,TouchableOpacity,StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';

const MapModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [mapRegion, setMapRegion] = useState<Region>({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleMapRegionChange = (region: Region) => {
    setMapRegion(region);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
           onPress={handlePress}
           style={styles.button}
      >
        <Text style={styles.buttonText}>Open Map</Text>
        </TouchableOpacity>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1, height: '50%',width: '100%', }}
            region={mapRegion}
            onRegionChange={handleMapRegionChange}
          >
            <Marker coordinate={{ latitude: mapRegion.latitude, longitude: mapRegion.longitude }} />
          </MapView>
          <Button title="Close Map" onPress={() => setModalVisible(false)} />
          
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
