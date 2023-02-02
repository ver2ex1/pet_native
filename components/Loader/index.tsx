import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = () => {
  return (
    <ActivityIndicator style={styles.wrapper} size="large" color="#2c2b35" />
  );
};

export default Loader;
