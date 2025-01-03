import * as Updates from 'expo-updates';
import {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
const {width, height} = Dimensions.get('window');


export default function App() {

  const {
    currentlyRunning,
    isUpdateAvailable,
    isUpdatePending
  } = Updates.useUpdates();

  useEffect(() => {
    if (isUpdatePending) {
      // Update has successfully downloaded; apply it now
      Updates.reloadAsync();
    }
  }, [isUpdatePending]);

  // If true, we show the button to download and run the update
  const showDownloadButton = isUpdateAvailable;

  // Show whether or not we are running embedded code or an update
  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? 'This app is running from built-in code'
    : 'This app is running an update';

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Updates Demo1</Text>
      <Text style={styles.headerText}>========</Text>
      <Text style={styles.headerText}>Updates Demo2</Text>
      <Text style={styles.headerText}>========</Text>
      <Text style={styles.headerText}>Updates Demo3</Text>
      <Text>{runTypeMessage}</Text>
      {/* <Button onPress={() => Updates.checkForUpdateAsync()} title="Check manually for updates" /> */}
      {showDownloadButton ? (
        <Button onPress={() => Updates.fetchUpdateAsync()} title="Download and run update" />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
