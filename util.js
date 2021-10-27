import axios from 'axios';
import {AsyncStorage} from 'react-native';

export let axiosInstance = axios.create({
  baseURL: 'https://www10.versaccounts.com/v1',
  timeout: 10000,
  headers: {
    VERSACCOUNTS_AUTHORIZATION: '6243d4bcd1dd95b4ef4b3d9aff17ffe16c04ba01',
  },
});

export async function setString(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('setString Error: ' + e);
  }
}

export async function getString(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log('getString Error: ' + e);
    return null;
  }
}

export function getCurrentDate() {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return date + '-' + month + '-' + year;
}

export function getCurrentTime() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();
  return hours + ':' + minutes + ':' + seconds;
}
