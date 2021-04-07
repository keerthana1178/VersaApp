// In index.js of a new project
import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import SettingsScreen from './App.js';

const HomeScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings', // Push the screen registered with the 'Settings' key
              options: {
                // Optional options object to configure the screen
                topBar: {
                  title: {
                    text: 'Settings', // Set the TopBar title of the new Screen
                  },
                },
              },
            },
          });
        }}
        title="Push Nav"
        color="blue"
      />
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings', // Push the screen registered with the 'Settings' key
              options: {
                // Optional options object to configure the screen
                topBar: {
                  title: {
                    text: 'Settings', // Set the TopBar title of the new Screen
                  },
                },
              },
            },
          });
        }}>
        <Text style={styles.TouchableOpacityText}>Go to settings</Text>
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#f69531',
    },
  },
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  TouchableOpacity: {
    borderColor: '#f69531',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },
  TouchableOpacityText: {
    color: '#f69531',
  },
});
