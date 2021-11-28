import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Button = ({content, top, width, propsStyle, onclick}) => {
  return (
    // <DropShadow
    //   style={{
    //     shadowColor: '#000',
    //     shadowOffset: {
    //       width: 0,
    //       height: 0,
    //     },
    //     shadowOpacity: 1,
    //     shadowRadius: 5,
    //   }}>
    //   <View styles={{position: 'absolute', top: '150'}}>
    //     <Text>Hello</Text>
    //   </View>
    <TouchableOpacity
      onPress={onclick}
      style={{...styles.touchableOpacity, ...propsStyle, top: top}}>
      <LinearGradient
        colors={['#FDB207', '#FDB207']}
        style={{...styles.buttonStyle, width: width}}>
        <Text style={styles.textSign}>{content}</Text>
      </LinearGradient>
    </TouchableOpacity>
    // </DropShadow>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {position: 'absolute', elevation: 100},
  buttonStyle: {
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {color: 'black', fontSize: 20, fontWeight: '600'},
});

export default Button;
