import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Alert, Button} from 'react-native';
import {RNCamera} from 'react-native-camera';

import SuccessScreen from './SuccessScreen';
import FailureScreen from './FailureScreen';
import CountScreen from './CountScreen';

const CAM_VIEW_HEIGHT = Dimensions.get('screen').width * 1.5;
const CAM_VIEW_WIDTH = Dimensions.get('screen').width;

const leftMargin = 100;
const topMargin = 50;
const frameWidth = 200;
const frameHeight = 250;

const scanAreaX = leftMargin / CAM_VIEW_HEIGHT;
const scanAreaY = topMargin / CAM_VIEW_WIDTH;
const scanAreaWidth = frameWidth / CAM_VIEW_HEIGHT;
const scanAreaHeight = frameHeight / CAM_VIEW_WIDTH;

const CameraScanner = () => {
  const [boxBorderColor, setBoxBorderColor] = useState('red');
  const [focusPoint, setfocusPoint] = useState({x: 0.5, y: 0.5});
  const [scanStatus, setScanStatus] = useState(false);
  const [data, setData] = useState('');
  var id = '09501101530003';
  return (
    <>
      {!scanStatus ? (
        <View style={styles.container}>
          {/* <Text style={styles.banner}>Add Product</Text> */}
          <RNCamera
            style={styles.preview}
            rectOfInterest={{
              x: scanAreaX,
              y: scanAreaY,
              width: scanAreaWidth,
              height: scanAreaHeight,
            }}
            cameraViewDimensions={{
              width: CAM_VIEW_WIDTH,
              height: CAM_VIEW_HEIGHT,
            }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            captureAudio={false}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'Camera permission needed to scan barcodes',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            autoFocusPointOfInterest={focusPoint}
            onDoubleTap={e => {
              console.log(e);
              console.log({x: e.x / CAM_VIEW_WIDTH, y: e.y / CAM_VIEW_HEIGHT});
              setfocusPoint({
                x: e.x / CAM_VIEW_WIDTH,
                y: e.y / CAM_VIEW_HEIGHT,
              });
            }}
            onBarCodeRead={barcodes => {
              console.log(barcodes);
              setBoxBorderColor('green');
              setTimeout(() => {
                setData(barcodes.data);
                setScanStatus(true);
                setBoxBorderColor('red');
              }, 1000);
            }}>
            {/* <View style={styles.box}></View> */}
            <View style={[styles.box1, {borderColor: boxBorderColor}]} />
          </RNCamera>

          {/* <View style={styles.footer} /> */}
        </View>
      ) : data == id ? (
        <CountScreen />
      ) : (
        <FailureScreen />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  data: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  banner: {
    flex: 2,
    fontSize: 40,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  preview: {
    // flex:3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 250,
    height: 250,
    borderColor: 'red',
    borderWidth: 2,
  },
  box1: {
    position: 'absolute',
    top: leftMargin,
    right: topMargin,
    width: frameHeight,
    height: frameWidth,
    borderWidth: 2,
    opacity: 0.5,
  },
  box2: {
    position: 'absolute',
    top: leftMargin,
    right: topMargin,
    width: frameHeight,
    height: frameWidth,
    borderWidth: 2,
    backgroundColor: 'green',
    opacity: 0.5,
  },
  footer: {
    flex: 1,
  },
});

export default CameraScanner;
