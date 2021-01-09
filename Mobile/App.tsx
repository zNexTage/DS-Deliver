import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import Colors from './src/Consts/Colors';
import Routes from './src/Routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.PrimaryColor} style="auto" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
