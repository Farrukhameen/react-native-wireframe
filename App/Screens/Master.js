import React from 'react';
import {Text, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';

import colors from '../Styles/Colors';
import s from '../Styles/CommonStyles';
import CenterComponent from '../Common/HeaderCenter';

const Master = ({children}) => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={s.container}>
      <Header
        leftComponent={
          <LeftComponent toggle={() => navigation.toggleDrawer()} />
        }
        centerComponent={<CenterComponent />}
        containerStyle={{
          backgroundColor: colors.bg,
          borderBottomColor: colors.primary,
          borderBottomWidth: 3,
          height: 80,
          width: '100%',
        }}
        rightComponent={() => (
          <View>
            <Text style={s.ordersHead}>{route.name}</Text>
          </View>
        )}
      />
      {children}
    </View>
  );
};

const LeftComponent = ({toggle}) => (
  <Icon name="menu" color={colors.textPrimary} onPress={toggle} />
);

export default Master;
