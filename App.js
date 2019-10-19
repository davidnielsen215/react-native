import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import FetchLocation from './FetchLocation'


export default class App extends React.Component {

  render() {
    const icon = {
      uri:
      'https://cdn4.iconfinder.com/data/icons/hotel-and-restaurant-1-13/48/57-512.png'
    }
    const img = 
      require('./logo-images/ManVsMedia.png')
    
    return (
      <View style={styles.container}>
        {/* Icon */}
        <LinearGradient
          // colors={['#5f2c82','#0abfbc']}
          colors={['black', 'black', 'black', '#3E0000', '#dd1818']}
          style={{ height: 900, width: 500, padding: 6, alignItems: 'center', borderRadius: 1 }}>
        <Image source={img} style={styles.icon}/>
        {/* Text */}
        <Text style={styles.font}>Find Users in Your Area</Text>
        {/* Button Opacity */} 
        <TouchableOpacity onPress={this.handlePress}>
          {/* Button and Alert */}
        </TouchableOpacity>
        <Button title='David Nielsen' color='white' onPress={() => Linking.openURL('https://www.instagram.com/david.nielsn/')}/>
        {/* <Text style={styles.font}>Click 'Get Started' to begin</Text> */}
        <FetchLocation/>
          </LinearGradient>
      </View>
      
    );
  }
}

handlePress = () => {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: 30,
  },
  button: {
    
  },
  icon: {
    marginTop: 250,
    marginBottom: 170,
    width: 200,
    height: 55,
  }
});

// #dc2430, #7b4397