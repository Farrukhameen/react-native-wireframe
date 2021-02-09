import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import colors from '../Styles/Colors';
import s from '../Styles/CommonStyles';

const Loader = ({visible}) => {
  if (visible) {
    return (
      <View style={s.loader}>
        <View style={s.spinnerWrapper}>
          <Text style={s.loaderText}>Loading</Text>
          <ActivityIndicator color={colors.textSecondary} size={40} />
        </View>
      </View>
    );
  }
  return null;
};

export default Loader;
