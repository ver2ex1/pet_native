import {Text, Button} from '@rneui/themed';
import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Animated, Image, Easing} from 'react-native';
import styles from './styles';
import type {WelcomeProps} from '../../config/types';

const WelcomeScreen = ({navigation}: WelcomeProps) => {
  const animation = useRef(new Animated.Value(-300)).current;
  const infoAnimation = useRef(new Animated.Value(0)).current;
  const handleNavigate = () => {
    navigation.navigate('Home');
  };
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();

    Animated.timing(infoAnimation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [animation, infoAnimation]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          ...styles,
          transform: [{translateX: animation}],
        }}>
        <Image
          source={require('../../assets/images/car.png')}
          style={styles.image}
        />
      </Animated.View>
      <Animated.View style={{...styles.info, opacity: infoAnimation}}>
        <Text h1 style={styles.title}>
          Premium cars. Enjoy the luxury
        </Text>
        <Text style={styles.subTitle}>
          Premium and prestige car daily rental. Experience the thrill at a
          lower price
        </Text>
      </Animated.View>
      <Animated.View style={{...styles.buttonWrapper, opacity: infoAnimation}}>
        <Button
          title="Let's Go"
          style={styles.button}
          onPress={handleNavigate}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
