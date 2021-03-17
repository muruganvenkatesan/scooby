import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';

function FriendDetails(props) {
  const navigation = useNavigation();
  let name = getName();
  let imageUrl = getImage();
  function getImage() {
    switch (props?.route?.params?.title) {
      case 'Daphne': return 'https://assets.stickpng.com/thumbs/59f879ef3cec115efb36239c.png';
      case 'Fred': return 'https://assets.stickpng.com/thumbs/5c7e3f7d72f5d9028c17ec58.png';
      case 'Shaggy': return 'https://assets.stickpng.com/thumbs/59f87a0d3cec115efb3623a0.png';
      case 'Velma': return 'https://assets.stickpng.com/thumbs/59f879e53cec115efb36239b.png';
      default: return;
    }
  }
  function getName() {
    switch (props?.route?.params?.title) {
      case 'Daphne': return 'Daphne Blake';
      case 'Fred': return 'Frederick Herman Jones';
      case 'Shaggy': return 'Shaggy Rogers';
      case 'Velma': return 'Velma Dinkley';
      default: return;
    }
  }

  const navConst = {
    myprofile: 'myprofile',
    myfriends: 'myfriends',
    friendDetails: 'friendDetails',
  }
  const friendDetails = StyleSheet.create({
    container: {
      flex: 1,
      borderTopWidth: 0.1,
      borderColor: 'black',
      backgroundColor: 'ghostwhite',
      alignItems: 'center',
      paddingTop: 50,
    },
    container1: {
      height:'80%',
      width: '100%',
    },
    container2: {
      height:'20%',
      width: '100%',
      alignItems: 'center',
      marginTop: 30
    },
    image: {
      flex: 1,
      resizeMode: 'stretch'
    },
    fullName: {
      color: 'red',
      fontSize: 20,
    },
    buttonName: {
      alignSelf: 'flex-end',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth: 1.3,
      borderStyle: 'solid',
      borderColor: 'red',
      padding: 10,
      marginTop: 10,
      backgroundColor: '#C0C0C0',
      color: 'black',
      borderRadius: 7
    },
    button: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 28,
    }
  });

  return (
    <View style={friendDetails.container}>
      <View style={friendDetails.container1}>
      <Image style={friendDetails.image} source={{uri:imageUrl}} />
        <View style={friendDetails.container2}>
          <Text style={friendDetails.fullName}>{`My full name ${name}`} </Text>
          <TouchableOpacity
          style={friendDetails.button}
          onPress={() => props.navigation.navigate(navConst.myfriends)}>
          <Text style={friendDetails.buttonName}>
           Go Back
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FriendDetails;