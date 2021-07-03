import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform ,Alert ,Button, StyleSheet, Text,TouchableWithoutFeedback, View, Image,  SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { useNavigation } from '@react-navigation/native';
// import { navigationRef } from './RootNavigation';



function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity
        style={styles.happyButton}
        onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.textHappy} >Feeling Happy</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )}


function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();






export default function App() {
  const textPress = () => console.log('text pressed')
  //const navigation = useNavigation(); 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
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
