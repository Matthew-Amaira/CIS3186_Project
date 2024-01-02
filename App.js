import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { StyleSheet, Text, View,} from 'react-native';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Onboarding from './components/Onboarding';

export default function App() {
  return (
    <View style={styles.container}>

      <Header/>
      <Onboarding/>
      <NavBar/>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
});