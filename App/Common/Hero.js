import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import s from '../Styles/CommonStyles';

const Hero = () => (
  <SafeAreaView>
    <View style={s.heroWrapper}>
      <Text style={s.heroTitle}>BOILER PLATE</Text>
    </View>
  </SafeAreaView>
);

export default Hero;
