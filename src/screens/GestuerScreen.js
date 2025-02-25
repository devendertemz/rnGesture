import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Alert,
} from 'react-native';
import DraggableComponent from '../component/DraggableComponent';
import SingleTap from '../component/SingleTap';
import DoubleTapExample from '../component/DoubleTapExample';
import SwipeableCard from '../component/SwipeableCard';

const GestuerScreen = ({route}) => {
  console.log('reout' + JSON.stringify(route));

  if (route.params.type == 1) {
    return (
      <ScrollView style={styles.container}>
        <DraggableComponent />
      </ScrollView>
    );
  } else if (route.params.type == 2) {
    return (
      <ScrollView style={styles.container}>
        <SingleTap />
      </ScrollView>
    );
  } else if (route.params.type == 3) {
    return (
      <ScrollView style={styles.container}>
        <DoubleTapExample />
      </ScrollView>
    );
  } else if (route.params.type == 4) {
    return (
      <ScrollView style={styles.container}>
        <SwipeableCard />
      </ScrollView>
    );
  }
  //<DraggableComponent />
  //SingleTap
  //DoubleTapExample
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default GestuerScreen;
