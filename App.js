import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform ,Alert ,Button, StyleSheet, Text,TouchableWithoutFeedback, View, Image,  SafeAreaView, TouchableOpacity, } from 'react-native';

export default function App() {
  const textPress = () => console.log('text pressed')
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text onPress={textPress}>Welcome to Moodic</Text> */}
      <Image 
      style={styles.logo}
      source={require('./assets/logo.jpeg')} />
      <TouchableOpacity
        style={styles.happyButton}
        onPress={() => console.log('your happy')}
        >
          <Text style={styles.textHappy} >Feeling Happy</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.sadButton}
        onPress={() => console.log('your happy')}
        >
          <Text style={styles.textSad} >Feeling Sad</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.madButton}
        onPress={() => console.log('your happy')}
        >
          <Text style={styles.textMad} >Feeling Mad</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.stresButton}
        onPress={() => console.log('your happy')}
        >
          <Text style={styles.textStres} >Feeling Stressed</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 200,
    bottom: 220
  },
  happyButton: {
    //width: 300,
    //height: 300,
    padding: 5,
    backgroundColor: '#2A8DE3',
    bottom: 135,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHappy: {
    fontSize: 30,
  },
  sadButton: {
    //width: 300,
    //height: 300,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 4,
    paddingTop: 4,
    backgroundColor: '#2A8DE3',
    bottom: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSad: {
    fontSize: 37,
  },
  madButton: {
    //width: 300,
    //height: 300,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 4,
    paddingTop: 4,
    backgroundColor: '#2A8DE3',
    bottom: 45,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMad: {
    fontSize: 36.5,
  },
  stresButton: {
    //width: 300,
    //height: 300,
    padding: 5,
    backgroundColor: '#2A8DE3',
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 7,
    paddingTop: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStres: {
    fontSize: 28,
  }
});
