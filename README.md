# VersaApp
Barcode scanning and inventory management app for Versa Cloud ERP Inc.

To run the app locally, clone the repository and run-
```
git clone https://github.com/VT08/VersaApp.git
cd VersaApp
npm i
yarn install
```
Start the metro server by running-
``` 
npm run start
```
### To run the app on local android emulator (e.g android studio)

Start the android emulator before running the app. To run the app-
```
npm run android
```
### To run the app on your android device
 enable USB debugging (under developer options).
 Plug in your device and change usb prefernces to PTP.
In your terminal, check if your computer is recognising the device by running-
```
adb devices
```
If the device is attached properly it should return a device ID, like so-

![adb devices response screenshot](http://drive.google.com/uc?export=view&id=1bZAYNuRDpbhemfvC-QKoVgg2jYSR_bbH)

following this, you can run-
```
npm run android
```
