import React, {useRef} from 'react';
import {View, StyleSheet, Animated, PanResponder} from 'react-native';

const DraggableComponent = () => {
  // Step 1: Create an animated value for movement
  const pan = useRef(new Animated.ValueXY()).current;

  // Step 2: Create a PanResponder to handle gestures
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true, // Activate drag
      onPanResponderMove: Animated.event(
        [null, {dx: pan.x, dy: pan.y}], // Capture movement
        {useNativeDriver: false},
      ),
      onPanResponderRelease: () => {
        // Step 3: Reset position on release
        Animated.spring(pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers} // Attach gesture handlers
        style={[styles.box, {transform: pan.getTranslateTransform()}]} // Apply animation
      />
    </View>
  );
};

// Step 4: Define styles
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  box: {width: 100, height: 100, backgroundColor: 'orange', borderRadius: 10},
});

export default DraggableComponent;


/*
How It Works
Detect Touch → PanResponder activates when the user touches the box.
Move the Box → Animated.event() updates x and y positions as the user drags.
Release the Box → Animated.spring() smoothly brings the box back to its original position.
Transforms the View → transform: pan.getTranslateTransform() moves the box in real-time.
*/