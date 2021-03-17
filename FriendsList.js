import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FriendsList(props) {
  const navigation = useNavigation();

  const friendnames = ['Daphne', 'Fred', 'Shaggy', 'Velma'];

  const navConst = {
    myprofile: 'myprofile',
    myfriends: 'myfriends',
    friendDetails: 'friendDetails',
  }
  const myFriends = StyleSheet.create({
    container: {
      flex: 1,
      borderTopWidth: 0.1,
      borderColor: 'black',
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    nameWrapper: {
      paddingBottom: 20,
    },
    name: {
      fontSize: 30,
      fontWeight: 'bold',
    }
  });

  return (
    <View style={myFriends.container}>
      {
        friendnames?.map((friendName, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={myFriends.nameWrapper}
              onPress={() => navigation.navigate(navConst.friendDetails, { title: friendName })}>
              <Text
                style={myFriends.name}
              >
                {friendName}
              </Text>
            </TouchableOpacity>
          )
        })
      }

    </View>
  );
}

export default FriendsList;