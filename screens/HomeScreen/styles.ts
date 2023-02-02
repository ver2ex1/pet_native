import {StyleSheet} from 'react-native';
import theme from '../../config/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.lightColors?.secondary,
    flex: 1,
  },
  content: {
    paddingTop: 20,
    paddingHorizontal: 28,
  },
  carCard: {
    paddingVertical: 16,
    paddingHorizontal: 22,
    backgroundColor: theme.lightColors?.primary,
    borderRadius: 20,
  },
  carCardTitle: {
    textTransform: 'uppercase',
    color: theme.lightColors?.grey0,
    letterSpacing: 2.4,
  },
  image: {height: 170, width: 300, transform: [{scaleX: -1}]},
  carInfo: {
    color: theme.darkColors?.black,
    fontWeight: '600',
    fontSize: 20,
  },
  detailsWrapper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  fuelType: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  fuelTypeText: {
    fontSize: 12,
    color: theme.lightColors?.grey0,
  },
  mediumBlock: {
    marginTop: 22,
    display: 'flex',
    flexDirection: 'row',
    gap: 17,
    justifyContent: 'center',
  },
  userWrapper: {
    width: '50%',
    backgroundColor: theme.lightColors?.primary,
    borderRadius: 15,
    padding: 30,
    display: 'flex',
    alignItems: 'center',
    gap: 15,
  },
  userImage: {
    width: 73,
    height: 73,
    borderRadius: 50,
  },
  userInfo: {
    display: 'flex',
    gap: 6,
  },
  userInfoText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  userInfoPrice: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '700',
  },
  mapWrapper: {
    width: '50%',
    backgroundColor: theme.lightColors?.primary,
    borderRadius: 15,
  },
  map: {...StyleSheet.absoluteFillObject},
});

export default styles;
