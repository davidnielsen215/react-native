import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import FetchLocation from './FetchLocation'


export default class App extends React.Component {

  render() {
    const icon = {
      uri:
      'https://cdn4.iconfinder.com/data/icons/hotel-and-restaurant-1-13/48/57-512.png'
    }

    return (
      <View style={styles.container}>
        {/* Icon */}
        <LinearGradient
          colors={['#5f2c82','#0abfbc']}
          // colors={['#43cea2', '#0abfbc']}
          style={{ height: 900, padding: 6, alignItems: 'center', borderRadius: 1 }}>
        <Image source={icon} style={styles.icon}/>
        {/* Text */}
        <Text style={styles.font}>Find Users in Your Area</Text>
        {/* Button Opacity */}
        <TouchableOpacity onPress={this.handlePress}>
          {/* Button and Alert */}
        </TouchableOpacity>
        <Button title='Get Started' color='white' onPress={() => Alert.alert('Feature not availble')}/>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 40,
  },
  button: {
    
  },
  icon: {
    marginTop: 200,
    width: 200,
    height: 200
  }
});

// #dc2430, #7b4397