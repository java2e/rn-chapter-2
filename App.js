import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './screen/StartScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Tahmin Et!"></Header>
      <StartScreen></StartScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  }
  
});
