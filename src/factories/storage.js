/* eslint no-undef: "off",
          global-require: "off"
*/
import {
    AsyncStorage
} from 'react-native';

class StorageFactory {
  constructor() {
    if (typeof localStorage === 'undefined' || localStorage === null) {
      const LocalStorage = require('node-localstorage').LocalStorage;

      this.localStorage = new LocalStorage('./localStorage');
    } else {
      this.localStorage = window.localStorage;
    }
  }

  async set(key, value) {
      try{
          AsyncStorage.setItem(key, value).then(res => res)
      }catch (error){
          return error;
      }
  }

  async get(key) {
      try{
          AsyncStorage.getItem(key).then(item => item);
      }catch (err){
          return err
      }
  }

  delete(key) {
      try{
          AsyncStorage.removeItem(key).then(res => res);
      }catch (err){
          return err;
      }
  }
}

export default StorageFactory;
