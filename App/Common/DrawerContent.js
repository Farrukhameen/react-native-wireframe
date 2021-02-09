import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Hero from './Hero';

import s from '../Styles/CommonStyles';

const DrawerContent = ({navigation, ...rest}) => {
  return (
    <DrawerContentScrollView navigation={navigation} {...rest}>
      <Hero />
      <TouchableOpacity
        style={s.secondaryListItem}
        onPress={() => navigation.navigate('ClockOut')}>
        <Text style={s.listItemTitle}>Clock out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
