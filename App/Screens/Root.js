import React from 'react';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Loader from '../Common/Loader';

import s from '../Styles/CommonStyles';
import {makeSelectHydrated} from '../Redux/HydrateSelectors';
import LoginScreen from './Login';
import {makeSelectClockedIn, makeSelectToken} from './Login/selectors';
import ClockInScreen from './ClockIn';
import {isClockedIn} from '../Library/Navigation';
import DrawerContent from '../Common/DrawerContent';
import ClockOutScreen from './ClockOut';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Root = () => {
  const hydrated = useSelector(makeSelectHydrated());
  const token = useSelector(makeSelectToken());
  const clockedIn = useSelector(makeSelectClockedIn());
  if (!hydrated) {
    return <Loader visible />;
  }
  return (
    <>
      <StatusBar hidden />
      {isClockedIn(token, clockedIn) ? (
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="ClockOut"
            drawerStyle={s.drawerStyle}
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="ClockOut" component={ClockOutScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            {token.length > 0 ? (
              <Stack.Screen name="ClockIn" component={ClockInScreen} />
            ) : (
              <Stack.Screen name="Login" component={LoginScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Root;
