import {StyleSheet, Dimensions} from 'react-native';
import {human} from 'react-native-typography';
import colors from './Colors';

const {width, height} = Dimensions.get('window');

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.bg,
  },
  bookings: {
    marginTop: 10,
  },
  center: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerWrapper: {
    flexDirection: 'row',
    width: 250,
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    ...human.largeTitleWhiteObject,
    marginHorizontal: 15,
  },
  mt: (m) => ({
    marginTop: m * 10,
  }),
  mb: (m) => ({
    marginBottom: m * 10,
  }),
  error: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: height - 100,
  },
  errorText: {
    fontSize: 60,
    color: colors.primary,
    fontWeight: '600',
    opacity: 0.7,
    textTransform: 'capitalize',
  },
  drawerWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 25,
  },
  drawerItem: {},
  divider: {
    borderTopWidth: 1,
    borderColor: colors.divider,
    marginVertical: 7,
  },
  heroWrapper: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },
  ordersHead: {
    ...human.title3Object,
    fontWeight: 'bold',
  },
  heroTitle: {
    fontSize: 60,
    color: colors.primary,
    fontFamily: 'Raleway-Black',
    fontWeight: '900',
  },
  drawerStyle: {
    width: 400,
  },
  primaryListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  secondaryListItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  listItemTitle: {
    fontSize: 25,
    fontFamily: 'Raleway-SemiBold',
    marginLeft: 20,
    color: colors.coal,
    marginBottom: 5,
  },

  card: {
    backgroundColor: colors.bg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderWidth: 5,
    borderColor: colors.primary,
    marginBottom: 25,
  },
  header: {
    flexDirection: 'row',
  },
  cardTitle: {
    color: colors.textSecondary,
    backgroundColor: colors.primary,
    fontSize: 25,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 15,
    paddingBottom: 15,
    fontFamily: 'Raleway-Black',
  },
  body: {
    padding: 10,
  },
  alert: {},
  alertText: {
    color: colors.error,
  },
});

export default s;
