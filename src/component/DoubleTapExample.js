import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

const DoubleTapExample = () => {
  const scale = useRef(new Animated.Value(1)).current;
  const [lastTap, setLastTap] = useState(0);

  const handleTap = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      // Double Tap Detected
      Animated.spring(scale, {
        toValue: scale._value === 1 ? 1.5 : 1,
        useNativeDriver: true,
      }).start();
    }
    setLastTap(now);
  };

  return (
    <TouchableWithoutFeedback onPress={handleTap}>
      <Animated.View style={[styles.box, {transform: [{scale}]}]} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    margin: 20,
  },
});

export default DoubleTapExample;
