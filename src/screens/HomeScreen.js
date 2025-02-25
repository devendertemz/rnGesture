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

const HomeScreen = ({navigation}) => {
 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Pan gesture"
          onPress={() =>
            navigation.navigate('GestuerScreen', {
              type: 1,
              desc: 'This is a  drag with Pan Responder ',
            })
          }
        />

        <Button
          style={{marginVertical: 10}} // This may not work on `Button`
          title="Single tap"
          onPress={() =>
            navigation.navigate('GestuerScreen', {
              type: 2,
              desc: 'This is a  single tap ',
            })
          }
        />
        <Button
          style={{marginVertical: 10}} // This may not work on `Button`
          title="double tap"
          onPress={() =>
            navigation.navigate('GestuerScreen', {
              type: 3,
              desc: 'This is a  double tap ',
            })
          }
        />
        <Button
          style={{marginVertical: 10}} // This may not work on `Button`
          title="swipe able"
          onPress={() =>
            navigation.navigate('GestuerScreen', {
              type: 4,
              desc: 'This is a  swipe able ',
            })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    gap: 20,
  },
});

export default HomeScreen;
