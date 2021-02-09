import {Dimensions, StyleSheet} from 'react-native';
import {human} from 'react-native-typography';
import colors from '../../Styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: colors.bg,
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    ...human.largeTitle,
    fontWeight: 'bold',
    color: colors.primary,
  },
  info: {
    ...human.body,
  },
  alert: {
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
    height: 30,
  },
  alertText: {
    color: colors.error,
  },
  form: {
    paddingTop: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  submit: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.primary,
  },
});
