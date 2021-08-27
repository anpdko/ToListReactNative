import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';

export default function Form({addHandler}) {
      
const [text, setValue] = useState('');
const onChange = (text) => {
      setValue(text);
}

return (
    <View style={styles.main}>
            <TextInput style={styles.input} onChangeText={onChange} 
            placeholder='Впишите задачу'/>
           <Pressable style={styles.button} onPress={() => addHandler(text)} >
                  <Text style={styles.text}>Добавить</Text>
            </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
      input:{
            borderBottomWidth: 1,
            borderColor: '#000',
            padding: 10,
            marginVertical: 30,
            marginHorizontal: '20%',
            width: '60%',
      },
      button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#333',
            marginHorizontal: '30%',
            width: '40%',
            marginBottom: 10,
      },
      text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
      },
});
