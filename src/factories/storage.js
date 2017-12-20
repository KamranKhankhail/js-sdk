/* eslint no-undef: "off",
          global-require: "off"
*/
import {
    AsyncStorage
} from 'react-native';

class StorageFactory {
  constructor() {}

  async set(key, value) {
      try{
          return await AsyncStorage.setItem(key, value)
      }catch (error){
          return error;
      }
  }

  async get(key) {
      try{
          return await AsyncStorage.getItem(key);
      }catch (err){
          return err
      }
  }

  async delete(key) {
      try{
          return await AsyncStorage.removeItem(key);
      }catch (err){
          return err;
      }
  }
}

export default StorageFactory;
