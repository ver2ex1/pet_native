import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Animated, Image, Easing} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  const animation = useRef(new Animated.Value(-300)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }, [animation]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          ...styles,
          transform: [{translateX: animation}],
        }}>
        <Image source={require('../../assets/images/car.png')} />
      </Animated.View>
    </SafeAreaView>
  );
};

export default HomeScreen;
