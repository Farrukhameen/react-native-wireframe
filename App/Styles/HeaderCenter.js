import {StyleSheet} from 'react-native';
import {human} from 'react-native-typography';
import colors from './Colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: '70%',
  },
  orders: {
    display: 'flex',
    flexDirection: 'row',
    borderRightWidth: 2,
    borderRightColor: colors.bgSecondary,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingRight: 35,
  },
  ordersHead: {
    ...human.title3Object,
  },
  newBookings: {
    position: 'absolute',
    top: -5,
    right: 3,
    backgroundColor: colors.active,
    width: 30,
    height: 30,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  activeHead: {
    fontWeight: 'bold',
  },
  count: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    alignItems: 'center',
    marginLeft: 5,
  },
  activeCount: {
    backgroundColor: colors.active,
  },
  countText: {
    ...human.title3WhiteObject,
    fontWeight: 'bold',
  },
  drivers: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  driversHead: {
    ...human.title3Object,
  },
});

export default styles;
