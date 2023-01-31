import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightColors?.secondary,
    flex: 1,
  },
  content: {
    padding: 30,
  },
  carCard: {
    padding: 15,
    backgroundColor: theme.lightColors?.primary,
    borderRadius: 20,
  },
  carCardTitle: {
    textTransform: 'uppercase',
    color: theme.lightColors?.grey0,
    letterSpacing: 2.4,
  },
  image: {height: 170, width: 300, transform: [{scaleX: -1}]},
});

export default styles;
