import React, {useCallback, useMemo, useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Alert,
} from 'react-native';
import UseMemoComp from '../component/UseMemoComp';

const UseMemoEx = ({navigation}) => {
  //  console.clear();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

 // Memoized function (re-created only when needed)
    const increaseCount2 = useCallback(() => {
      setCount2(count2 + 1);
    }, [count2]);

//   const increaseCount2 = () => {
//     setCount2(count2 + 1);
//   };
  //const x = IncreasebyThree(count3);

  const x = useMemo(() => IncreasebyThree(count3), [count3]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}} onPress={() => setCount1(count1 + 1)}>
        Count1: {count1}
      </Text>
      <UseMemoComp count2={count2} increaseCount2={increaseCount2} />
      <Text style={{fontSize: 20}} onPress={() => setCount3(count3 + 1)}>
        Count3: {count3}
      </Text>
    </View>
  );
};
const IncreasebyThree = x => {
  console.log('IncreasebyThree called');
  return x + 3;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    gap: 20,
  },
});
export default UseMemoEx;
