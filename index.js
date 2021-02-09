/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

import App from './App';
import {name as appName} from './app.json';

enableScreens();
LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
