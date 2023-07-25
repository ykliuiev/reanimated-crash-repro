/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import Animated from 'react-native-reanimated';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View style={styles.content}>
        <Text>Press R to crash on reload</Text>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
