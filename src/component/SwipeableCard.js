import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder } from 'react-native';

const SwipeableCard = () => {
  const [isSwiped, setIsSwiped] = useState(false);
  const position = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue(gesture.dx);
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > 150) {
        // Swiped Right - Archive
        Animated.timing(position, {
          toValue: 500, // Move off-screen
          duration: 300,
          useNativeDriver: false,
        }).start(() => setIsSwiped(true)); // Remove item
      } else if (gesture.dx < -150) {
        // Swiped Left - Delete
        Animated.timing(position, {
          toValue: -500, // Move off-screen
          duration: 300,
          useNativeDriver: false,
        }).start(() => setIsSwiped(true)); // Remove item
      } else {
        // Not enough swipe, reset position
        Animated.spring(position, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  if (isSwiped) return null; // Remove item from view

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.emailItem, { transform: [{ translateX: position }] }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.emailTitle}>React Native News</Text>
        <Text style={styles.emailSubtitle}>New updates available!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
  },
  emailItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  emailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default SwipeableCard;
