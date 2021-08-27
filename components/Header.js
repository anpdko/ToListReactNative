import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>СПИСОК ДЕЛ!!!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
        paddingTop: 30,
        height: 80,
        backgroundColor: 'silver'
  },
  text: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
  }
});
