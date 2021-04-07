// In index.js of a new project
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Camera from './Camera';
// import {Navigation} from 'react-native-navigation';

const SettingsScreen = props => {
  return (
    <View style={styles.root}>
      <Camera />
    </View>
  );
};

// Navigation.registerComponent('Settings', () => SettingsScreen);

// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'Home',
//             },
//           },
//         ],
//       },
//     },
//   });
// });

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default SettingsScreen;
