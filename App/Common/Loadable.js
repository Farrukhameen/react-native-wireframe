import React from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../Styles/Colors';

const Loadable = ({children, active, ...rest}) => {
  if (active) {
    return (
      <ActivityIndicator color={colors.textSecondary} {...rest} size={40} />
    );
  }
  return children;
};

export default Loadable;
