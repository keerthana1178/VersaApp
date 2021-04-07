import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
  const [code, setCode] = useState('Point at a Barcode');
  return (
    <View style={styles.container}>
      <Text style={styles.center}>Camera Module</Text>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log(barcodes);
          setCode(barcodes[0].rawData);
        }}
        captureAudio={false}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            console.log('pressed');
            takePicture;
          }}
          style={styles.capture}>
          <Text style={{fontSize: 14}}> {code} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Camera;

const takePicture = async () => {
  if (this.camera) {
    const options = {quality: 0.5, base64: true};
    const data = await this.camera.takePictureAsync(options);
    console.log(data.uri);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  center: {
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#fff',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
