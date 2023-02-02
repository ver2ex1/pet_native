import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {primary: '#F3F3F3', secondary: '#fff', grey0: '#787878'},
  darkColors: {
    primary: '#2c2b35',
    secondary: '#8E8E8E',
    black: '#2C2B34',
  },
  components: {
    Text: {
      h1Style: {fontFamily: 'Barlow-Bold'},
      h2Style: {fontSize: 12},
      style: {fontFamily: 'Barlow-Regular'},
    },
    Button: {
      buttonStyle: {backgroundColor: '#fff'},
      titleStyle: {color: '#2C2B34', fontFamily: 'Barlow-Bold', fontSize: 20},
      radius: 50,
    },
  },
});

export default theme;
