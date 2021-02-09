import {StyleSheet} from 'react-native';
import {human} from 'react-native-typography';
import colors from './Colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.bgSecondary,
    height: 60,
  },
  left: {
    width: '35%',
  },
  label: {
    paddingHorizontal: 10,
    ...human.calloutObject,
  },
  right: {
    width: '63%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 10,
  },
  status: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  statusLabel: {
    paddingRight: 5,
    ...human.bodyObject,
  },
  activeLabel: {
    fontWeight: 'bold',
  },
  count: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  activeCount: {
    backgroundColor: colors.active,
  },
  countText: {
    ...human.title3WhiteObject,
    fontWeight: 'bold',
  },
  activeStatus: {
    borderBottomWidth: 2,
    borderBottomColor: colors.active,
  },
});

export default styles;
