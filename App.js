import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FriendsList from './FriendsList';
import FriendDetails from './FriendDetails';

const Stack = createStackNavigator();

const navConst = {
  myprofile: 'myprofile',
  myfriends: 'myfriends',
  friendDetails: 'friendDetails',
};
const profileUrl = 'http://assets.stickpng.com/images/59f87a353cec115efb3623a4.png';
function Myprofile(props) {
  const profilePage = StyleSheet.create({
    container: {
      flex: 1,
    },
    container1: {
      flex: 0.7,
      backgroundColor: '#62FA0B',
    },
    container2: {
      flex: 0.5,
      backgroundColor: '#62FA0B',
      justifyContent: 'center',
    },
    profileImage: {
      flex: 1,
      resizeMode: 'center',
      marginTop: 10,
    },
    name: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 28,
    },
    buttonName: {
      alignSelf: 'flex-end',
      fontWeight: 'bold',
      fontSize: 20,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'red',
      padding: 20
    },
    button: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 28,
    }
  });

  return (
    <View style={profilePage.container}>
      <View style={profilePage.container1}>
        <Image style={profilePage.profileImage} source={{uri:profileUrl}} />
        <Text style={profilePage.name}>Scooby Doo</Text>
      </View>

      <View style={profilePage.container2}>
        <TouchableOpacity
          style={profilePage.button}
          onPress={() => props.navigation.navigate(navConst.myfriends)}>
          <Text style={profilePage.buttonName}>
            My Friends
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function App() {
  const headerTitleStyle = {
    color: 'blue',
    alignSelf: 'center',
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={navConst.myprofile}
          component={Myprofile}
          options={({ route }) => ({
            title: 'My Profile',
            headerTintColor: 'blue',
            headerTitleStyle: headerTitleStyle,
          })}
        />
        <Stack.Screen
          name={navConst.myfriends}
          component={FriendsList}
          options={({ route }) => ({
            title: 'My Friends',
            headerTintColor: 'blue',
            headerTitleStyle: headerTitleStyle,
          })}
        />
        <Stack.Screen
          name={navConst.friendDetails}
          component={FriendDetails}
          options={({ route }) => ({
            title: route?.params?.title,
            headerTintColor: 'blue',
            headerTitleStyle: headerTitleStyle,
          }
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;