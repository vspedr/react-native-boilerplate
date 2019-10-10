import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const setApiKey = key => {
  AsyncStorage.setItem('api_key', key);
};

const getApiKey = async () => {
  try {
    const apiKey = await AsyncStorage.getItem('api_key');
    return apiKey;
  } catch (error) {
    return error;
  }
};

const clearApiKey = async () => {
  await AsyncStorage.removeItem('api_key');
}

export default {
  setApiKey,
  getApiKey,
  clearApiKey
};
