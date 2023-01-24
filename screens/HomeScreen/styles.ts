import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {backgroundColor: theme.darkColors?.primary, flex: 1},
  title: {
    color: theme.lightColors?.secondary,
    maxWidth: 320,
  },
  image: {height: 420, marginTop: 60},
  info: {
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  subTitle: {color: theme.darkColors?.secondary, maxWidth: 280},
  button: {width: 319},
  buttonWrapper: {display: 'flex', alignItems: 'center', marginTop: 40},
});

export default styles;
