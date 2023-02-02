import React, {useState, useEffect} from 'react';
import {Text, Image} from '@rneui/themed';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {SafeAreaView, View} from 'react-native';
import {useQuery} from 'react-query';
import FuelIcon from '../../assets/icons/FuelIcon';
import NavigationArrowIcon from '../../assets/icons/NavigationArrowIcon';
import Loader from '../../components/Loader';
import styles from './styles';
import axios from '../../config/axios';

const HomeScreen = () => {
  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    });
  }, []);

  const {isLoading: isLoadingCarInfo, data: carInfo} = useQuery(
    'car_info',
    async () => {
      return await axios
        .get('v1/cars/?limit=2&model=q7')
        .then(res => {
          const {data} = res;
          return data;
        })
        .catch(err => console.log(err, 'error'));
    },
  );
  const {isLoading: isLoadingUser, data: userInfo} = useQuery(
    'user_info',
    async () => {
      return await axios
        .get('v1/randomuser')
        .then(res => {
          const {data} = res;
          return data;
        })
        .catch(err => console.log(err, 'error'));
    },
  );
  if (isLoadingCarInfo || isLoadingUser) {
    return <Loader />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.carCard}>
          <Text h2 style={styles.carCardTitle}>
            Nearest car
          </Text>
          <Image
            source={require('../../assets/images/homeCar.png')}
            style={styles.image}
          />
          <View>
            <Text style={styles.carInfo}>
              {carInfo?.[0]?.make.charAt(0).toUpperCase() +
                carInfo?.[0]?.make.slice(1)}
              &nbsp;
              {carInfo?.[0]?.model.toUpperCase()}
            </Text>
          </View>
          <View style={styles.detailsWrapper}>
            <View style={styles.fuelType}>
              <NavigationArrowIcon />
              <Text style={styles.fuelTypeText}>
                {carInfo?.[0]?.city_mpg}0 km
              </Text>
            </View>
            <View style={styles.fuelType}>
              <FuelIcon />
              <Text style={styles.fuelTypeText}>
                {carInfo?.[0]?.fuel_type.charAt(0).toUpperCase() +
                  carInfo?.[0]?.fuel_type.slice(1)}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.mediumBlock}>
          <View style={styles.userWrapper}>
            <Image
              source={
                userInfo?.sex === 'F'
                  ? require('../../assets/images/female.jpg')
                  : require('../../assets/images/male.jpeg')
              }
              style={styles.userImage}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userInfoText} numberOfLines={1}>
                {userInfo?.name}
              </Text>
              <Text style={styles.userInfoPrice}>5678 $</Text>
            </View>
          </View>
          <View style={styles.mapWrapper}>
            <MapView
              style={styles.map}
              initialRegion={position}
              showsUserLocation={true}
              showsMyLocationButton={true}
              followsUserLocation={true}
              showsCompass={true}
              scrollEnabled={true}
              zoomEnabled={true}
              pitchEnabled={true}
              rotateEnabled={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
