import {createTheme} from '@rneui/themed';

const theme = createTheme({
  lightColors: {secondary: '#fff'},
  darkColors: {
    primary: '#2c2b35',
    secondary: '#8E8E8E',
  },
  components: {
    Text: {
      h1Style: {fontFamily: 'Barlow-Bold'},
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
