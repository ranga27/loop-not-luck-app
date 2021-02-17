import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (storageKey, storageValue) => {
  try {
    await AsyncStorage.setItem(storageKey, storageValue);
    console.log('Data successfully saved');
  } catch (e) {
    console.log('Failed to save the data to the storage');
  }
};

export const readData = async (storageKey) => {
  try {
    return await AsyncStorage.getItem(storageKey);
  } catch (e) {
    console.log('Failed to fetch the data from storage');
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('Storage successfully cleared!');
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};

/* 
const testSave = async () => {
  await saveData('stat', 'fired');
};

const testLoad = async () => {
  console.log('Value: ' + (await readData('stat')));
}; */
