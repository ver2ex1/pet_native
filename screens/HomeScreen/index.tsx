import React from 'react';
import {Text, Image} from '@rneui/themed';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
