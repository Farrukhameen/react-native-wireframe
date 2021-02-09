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
  root: {
    flex: 1,
    justifyContent: 'center',
    width: 240,
  },
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
  submit: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    ...human.headlineWhiteObject,
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
});
