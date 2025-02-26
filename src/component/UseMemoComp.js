import React, {memo, useState} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

const UseMemoComp = ({count2, increaseCount2}) => {
  console.log('UseMemoComp called');
  return (
    <Text
      style={{fontSize: 20}}
      onPress={() => {
        increaseCount2();
      }}>
      {'count2: ' + count2}
    </Text>
  );
};

export default memo(UseMemoComp);
//export default UseMemoComp;
 // maked component memo for stop re-rendering
