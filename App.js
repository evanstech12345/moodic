import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Platform ,Alert ,Button, StyleSheet, Text,TouchableWithoutFeedback, View, Image,  SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
      style={styles.logo}
      source={require('./assets/logo.jpeg')} />
    <TouchableOpacity
        style={styles.happyButton}
        onPress={() => navigation.navigate('Happy')}
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
  )}


class HappyScreen extends Component {
  async componentDidMount() {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
      playThroughEarpieceAndroid: true,
    });

    this.sound = new Audio.Sound();
    const status = {
      shouldPlay: false
    }
    this.sound.loadAsync(require('./assets/happy/childrens-picnic.mp3'),status, false);
  }
  playSound() {
    this.sound.playAsync();
  }

  handleAudioPress = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.loadAsync(require('./assets/happy/childrens-picnic.mp3'), {shouldPlay: true});
    this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
  }

  handleAudioPause = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.unloadAsync(require('./assets/happy/childrens-picnic.mp3'), {shouldPlay: true});
    //this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
    this.state.playBackObj.setStatusAsync({shouldPlay: false})
  }



  
  





constructor(props) {
  super(props)
  this.state = {
    playBackObj: null,
  }
}
  
  render() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>A Piece Of Heaven</Text>
      {/* <TouchableOpacity */}
      {/* style={styles.btnmusic1}
      onPress={this.playSound.bind(this)}> */}
      {/* </TouchableOpacity> */}
      <Image 
       //source={require('')} 
      />
      <TouchableWithoutFeedback onPress={this.handleAudioPress}>
      <AntDesign 
      name="caretright" size={30} color="white" 
      // onPress={this.playSound.bind(this)}  
      style={styles.btnmusic1}
      ></AntDesign> 
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={this.handleAudioPause}>
      <Ionicons 
      name="ios-pause" size={37} color="white" 
       
      style={styles.btnmusic1Pause}
      />
      </TouchableWithoutFeedback>

    <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}
}

const Stack = createStackNavigator();






export default function App() {
  const textPress = () => console.log('text pressed')
  //const navigation = useNavigation(); 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Happy" component={HappyScreen} />
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
 
  btnmusic1: {
    bottom: 180,
    right: 100
    
  },
  btnmusic1Pause: {
    bottom: 214,
    right: 50
  },
  logo: {
    width: 300,
    height: 200,
    bottom: 200
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
