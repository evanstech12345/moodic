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
        onPress={() => navigation.navigate('Sad')}
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


  handleAudioPressVibe = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.loadAsync(require('./assets/happy/GoodVibe.mp3'), {shouldPlay: true});
    this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
  }

  handleAudioPauseVibe = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.unloadAsync(require('./assets/happy/GoodVibe.mp3'), {shouldPlay: true});
    //this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
    this.state.playBackObj.setStatusAsync({shouldPlay: false})
  }

  handleAudioPressJoy = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.loadAsync(require('./assets/happy/happy_joyful_children.mp3'), {shouldPlay: true});
    this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
  }

  handleAudioPauseJoy = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.unloadAsync(require('./assets/happy/happy_joyful_children.mp3'), {shouldPlay: true});
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
      <Text style={styles.pHeav}>A Piece Of Heaven</Text>
      {/* <TouchableOpacity */}
      {/* style={styles.btnmusic1}
      onPress={this.playSound.bind(this)}> */}
      {/* </TouchableOpacity> */}
      <Image 
      style={styles.heavenImg}
       source={require('/opt/homebrew/Caskroom/miniforge/base/envs/music_app/music_app/moodic/assets/a-peice-heav.jpeg')} 
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
      {/* GoodVibe */}
      <Image style={styles.vibeImg} source={require('//opt/homebrew/Caskroom/miniforge/base/envs/music_app/music_app/moodic/assets/goodVibesOn.jpg')}/>
      <Text style={styles.goodVibeText}>Good Vibes</Text>
      <TouchableWithoutFeedback onPress={this.handleAudioPressVibe}>
      <AntDesign 
      name="caretright" size={30} color="white" 
      // onPress={this.playSound.bind(this)}  
      style={styles.btnmusicVibe}
      ></AntDesign> 
  </TouchableWithoutFeedback>
  <TouchableWithoutFeedback onPress={this.handleAudioPauseVibe}>
      <Ionicons 
      name="ios-pause" size={37} color="white" 
       
      style={styles.btnmusic1PauseVibe}
      />
      </TouchableWithoutFeedback>
      {/*happy_joy*/}
      <Image style={styles.joyImg} source={require('./assets/joy.jpeg')}/>
      <Text style={styles.joyText}>Happy Joy</Text>
      <TouchableWithoutFeedback onPress={this.handleAudioPressJoy}>
      <AntDesign 
      name="caretright" size={30} color="white" 
      // onPress={this.playSound.bind(this)}  
      style={styles.btnmusicJoy}
      ></AntDesign> 
  </TouchableWithoutFeedback>
  <TouchableWithoutFeedback onPress={this.handleAudioPauseJoy}>
      <Ionicons 
      name="ios-pause" size={37} color="white" 
       
      style={styles.btnmusic1PauseJoy}
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
      <Stack.Screen name="Sad" component={SadScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}




class SadScreen extends Component {
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


  handleAudioPressVibe = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.loadAsync(require('./assets/happy/GoodVibe.mp3'), {shouldPlay: true});
    this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
  }

  handleAudioPauseVibe = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.unloadAsync(require('./assets/happy/GoodVibe.mp3'), {shouldPlay: true});
    //this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
    this.state.playBackObj.setStatusAsync({shouldPlay: false})
  }

  handleAudioPressJoy = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.loadAsync(require('./assets/happy/happy_joyful_children.mp3'), {shouldPlay: true});
    this.setState({...this.state, playBackObj: playBackObj, soundObj: status})
  }

  handleAudioPauseJoy = async audio => {
    const playBackObj = new Audio.Sound()
    const status = await playBackObj.unloadAsync(require('./assets/happy/happy_joyful_children.mp3'), {shouldPlay: true});
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
    return(
      <SafeAreaView style={styles.container}>
          <Text style={styles.pHeav}>A Piece Of Heaven</Text>
      {/* <TouchableOpacity */}
      {/* style={styles.btnmusic1}
      onPress={this.playSound.bind(this)}> */}
      {/* </TouchableOpacity> */}
      <Image 
      style={styles.heavenImg}
       source={require('/opt/homebrew/Caskroom/miniforge/base/envs/music_app/music_app/moodic/assets/a-peice-heav.jpeg')} 
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
      {/* GoodVibe */}
      <Image style={styles.vibeImg} source={require('//opt/homebrew/Caskroom/miniforge/base/envs/music_app/music_app/moodic/assets/goodVibesOn.jpg')}/>
      <Text style={styles.goodVibeText}>Good Vibes</Text>
      <TouchableWithoutFeedback onPress={this.handleAudioPressVibe}>
      <AntDesign 
      name="caretright" size={30} color="white" 
      // onPress={this.playSound.bind(this)}  
      style={styles.btnmusicVibe}
      ></AntDesign> 
  </TouchableWithoutFeedback>
  <TouchableWithoutFeedback onPress={this.handleAudioPauseVibe}>
      <Ionicons 
      name="ios-pause" size={37} color="white" 
       
      style={styles.btnmusic1PauseVibe}
      />
      </TouchableWithoutFeedback>
      {/*happy_joy*/}
      <Image style={styles.joyImg} source={require('./assets/joy.jpeg')}/>
      <Text style={styles.joyText}>Happy Joy</Text>
      <TouchableWithoutFeedback onPress={this.handleAudioPressJoy}>
      <AntDesign 
      name="caretright" size={30} color="white" 
      // onPress={this.playSound.bind(this)}  
      style={styles.btnmusicJoy}
      ></AntDesign> 
  </TouchableWithoutFeedback>
  <TouchableWithoutFeedback onPress={this.handleAudioPauseJoy}>
      <Ionicons 
      name="ios-pause" size={37} color="white" 
       
      style={styles.btnmusic1PauseJoy}
      />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnmusicJoy: {
    color: '#2A8DE3',
    top: 10,
    right: 40
  },
  btnmusic1PauseJoy: {
    color: '#2A8DE3',
    bottom: 25,
  },
  joyText: {
    top: 110,
    right: 120,
    fontSize: 20,
    color: '#2A8DE3'
  },
  joyImg: {
    height: 110,
    width: 110,
    right: 120,
    top: 100
  },
  vibeImg: {
    height: 110,
    width: 110,
    right: 120,
    bottom: 10
  },
  goodVibeText: {
    color: '#2A8DE3',
    fontSize: 20,
    right: 110
  },
  btnmusicVibe: {
    bottom: 120,
    right: 30,
    color: '#2A8DE3'
  },
  btnmusic1PauseVibe: {
    bottom: 154,
    left: 5,
    color: '#2A8DE3'
  },
  pHeav: {
    top: 45,
    right: 110,
    color: '#2A8DE3',
    fontSize: 20
  },
  heavenImg: {
    height: 110,
    width: 110,
    right: 120,
    bottom: 100
  },
 
  btnmusic1: {
    bottom: 180,
    right: 30,
    color: '#2A8DE3'
  },
  btnmusic1Pause: {
    bottom: 214,
    left: 5,
    color: '#2A8DE3'
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
