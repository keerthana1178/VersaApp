import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import HomeTiles from '../components/Hometiles';
import {AuthContext} from '../components/context';
const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();
  const theme = useTheme();
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor="#ED9121"
      />
      <View style={[styles.container, styles.pad]}>
        <HomeTiles
          logo={require('../assets/inventory.png')}
          name="Inventory list"
          onclick={() => navigation.navigate('Inventory')}
        />
        <HomeTiles
          logo={require('../assets/scanner1.png')}
          name="Scanner"
          onclick={() => navigation.push('Scanner')}
        />
        <HomeTiles
          logo={require('../assets/warehouse.png')}
          name="Warehouse"
          onclick={() => navigation.push('Warehouse')}
        />
        <HomeTiles
          logo={require('../assets/setting.png')}
          name="Settings"
          onclick={() => navigation.push('Settings')}
        />
        <HomeTiles
          logo={require('../assets/logout.png')}
          name="Logout"
          onclick={signOut}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pad: {
    marginTop: '10%',
  },
});
