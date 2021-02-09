import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {useRoute} from '@react-navigation/native';

import colors from '../Styles/Colors';
import s from '../Styles/CommonStyles';

const AuthMaster = ({children}) => {
  const route = useRoute();
  return (
    <View style={s.container}>
      <Header
        centerComponent={() => (
          <View>
            <Text style={s.ordersHead}>{route.name}</Text>
          </View>
        )}
        containerStyle={{
          backgroundColor: colors.bg,
          borderBottomColor: colors.primary,
          borderBottomWidth: 3,
          height: 80,
          width: '100%',
        }}
      />
      {children}
    </View>
  );
};

export default AuthMaster;
