import React from 'react';
import {View, Text} from 'react-native';
import AuthMaster from '../../Common/AuthMaster';

const LoginScreen = () => {
  return (
    <AuthMaster>
      <View>
        <Text>Login</Text>
      </View>
    </AuthMaster>
  );
};

export default LoginScreen;
