import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as ExpoEnodeLinkSDK from "@youssefhenna/expo-enode-link-sdk";

export default function App() {
  React.useEffect(() => {
    const resultListener = ExpoEnodeLinkSDK.listenToResult(
      (code, errorMessage) => {
        console.log(JSON.stringify({ code, errorMessage }, undefined, 2))
      }
    );
    return () => resultListener.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title='TESTING' onPress={() => ExpoEnodeLinkSDK.show('hejsan')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
