import React from 'react';
import {View, Text} from 'react-native';

import s from '../Styles/CommonStyles';

const Error = ({message}) => (
  <View style={s.error}>
    <Text style={s.errorText}>{message}</Text>
  </View>
);

export default Error;
