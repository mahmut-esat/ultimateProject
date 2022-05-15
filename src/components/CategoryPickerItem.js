import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Icons from './Icon';
import AppText from './AppText';

function CategoryPickerItem({item, onPress}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Icons backgroundColor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
});
