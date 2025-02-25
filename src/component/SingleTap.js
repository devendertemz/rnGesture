import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';

const SingleTap = () => {
  const [color, setColor] = useState('blue');

  return (
    <Pressable onPress={() => setColor(color === 'blue' ? 'green' : 'blue')}>
      <View style={[styles.box, {backgroundColor: color}]} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {width: 100, height: 100, borderRadius: 10, margin: 20},
});

export default SingleTap;


/*
Tap gestures are used to detect user interactions like a single tap (click) or double tap (quick two clicks). React Native does not provide built-in double tap detection, but we can implement it manually using Date.now() or use react-native-gesture-handler.
*/