import React from 'react'
import { BottomTabBarProps, BottomTabParamsList } from '../types'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
  profilePicUrl: string;
  rating: number;
  deliveryCount: number;
  onLogoutPress: () => void;
}
// const Profile: React.FC<Props> = ({
  const Profile:React.FC<BottomTabBarProps<BottomTabParamsList,"Profile">>= ({
  route, 
  navigation,
  name,
  profilePicUrl,
  rating,
  deliveryCount,
  onLogoutPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: profilePicUrl }} style={styles.profilePic} />
        <Text style={styles.name}>{name}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingValue}>{rating}</Text>
          <Text style={styles.ratingLabel}>Driver Rating</Text>
        </View>
        <View style={styles.deliveryCount}>
          <Text style={styles.deliveryCountValue}>{deliveryCount}</Text>
          <Text style={styles.deliveryCountLabel}>Deliveries Completed</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={onLogoutPress}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  ratingLabel: {
    fontSize: 16,
    color: '#777',
  },
  deliveryCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryCountValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  deliveryCountLabel: {
    fontSize: 16,
    color: '#777',
  },
  logoutButton: {
    backgroundColor: "#229865",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Profile;
