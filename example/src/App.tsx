import React, { useState, FunctionComponent } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import ProgressBar from 'react-native-progress-bar-horizontal';

type DividerProps = {
  margin?: number;
};

const Divider: FunctionComponent<DividerProps> = ({ margin = 10 }) => (
  <View style={{ marginVertical: margin }} />
);

export default function App() {
  const [progressValue, setProgressValue] = useState(Math.random());

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          title="Randomize"
          onPress={() => setProgressValue(Math.random())}
        />
      </View>
      <Divider margin={40} />

      <ProgressBar progress={progressValue} />
      <Divider />
      <ProgressBar
        progress={progressValue}
        borderWidth={1}
        fillColor="#4C2C2E"
        unfilledColor="#AF9995"
        height={10}
        borderColor="#4C2C2E"
        duration={100}
      />
      <Divider />
      <ProgressBar
        progress={progressValue}
        borderWidth={2}
        fillColor="#A2B4AC"
        height={15}
        borderColor="#A2B4AC"
        borderRadius={15}
        duration={1200}
      />
      <Divider />
      <ProgressBar
        progress={progressValue}
        borderWidth={0}
        fillColor="#2E5E4E"
        unfilledColor="#DBD3D8"
        height={20}
        borderColor="#2E5E4E"
        animated={false}
      />
      <Divider margin={40} />

      <ProgressBar progress={progressValue} width={200} />
      <Divider />
      <ProgressBar
        progress={progressValue}
        borderWidth={1}
        fillColor="#4C2C2E"
        unfilledColor="#AF9995"
        height={10}
        borderColor="#4C2C2E"
        width={200}
        duration={100}
      />
      <Divider />
      <ProgressBar
        progress={progressValue}
        borderWidth={2}
        fillColor="#A2B4AC"
        height={15}
        borderColor="#A2B4AC"
        borderRadius={15}
        duration={1200}
        width={200}
      />
      <Divider />
      <ProgressBar
        progress={progressValue}
        borderWidth={0}
        fillColor="#2E5E4E"
        unfilledColor="#DBD3D8"
        height={20}
        borderColor="#2E5E4E"
        duration={1000}
        width={200}
        animated={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  buttonWrapper: {
    backgroundColor: '#e9e9e9',
    padding: 5,
    width: 150,
    alignSelf: 'center',
  },
});
