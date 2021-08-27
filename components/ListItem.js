import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ListItem({el, deleteHandler}) {
  return (
      <TouchableOpacity onPress ={ () => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
      text:{
            padding: 20,
            textAlign: 'center',
            borderRadius: 5,
            backgroundColor: '#e9e9ed',
            borderWidth: 1,
            marginTop: 10,
            width: '80%',
            marginLeft: '10%'
      }
});
