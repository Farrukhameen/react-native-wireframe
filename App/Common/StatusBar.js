import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import s from '../Styles/StatusBar';

const StatusBar = ({filtered}) => (
  <View style={s.container}>
    <View style={s.left}>
      <Text style={s.label}>Showing All Active Orders</Text>
    </View>
    <View style={s.right}>
      <TouchableOpacity style={s.status}>
        <Text style={s.statusLabel}>Pending</Text>
        <View style={s.count}>
          <Text style={s.countText}>{filtered.incomplete?.length || 0}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={s.status}>
        <Text style={s.statusLabel}>Completed</Text>
        <View style={s.count}>
          <Text style={s.countText}>{filtered.approved?.length || 0}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={[s.status, s.activeStatus]}>
        <Text style={[s.statusLabel, s.activeLabel]}>Rejected</Text>
        <View style={[s.count, s.activeCount]}>
          <Text style={s.countText}>{filtered.rejected?.length || 0}</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default StatusBar;
