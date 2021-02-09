import React, {memo, useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {isActive} from '../Library/Navigation';
import s from '../Styles/HeaderCenter';
import {searchNewBookings} from '../Library/bookings';

const HeaderCenter = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const newBookings = useMemo(() => searchNewBookings([]), []);
  return (
    <View style={s.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Orders')}
        style={s.orders}>
        <Text
          style={[
            s.ordersHead,
            isActive(route, ['Orders', 'Response'], s.activeHead),
          ]}>
          Orders
        </Text>
        {newBookings > 0 ? (
          <Text style={s.newBookings}>{newBookings}</Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Schedule')}
        style={s.drivers}>
        <Text
          style={[s.driversHead, isActive(route, ['Schedule'], s.activeHead)]}>
          Go offline
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(HeaderCenter);
