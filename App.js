import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Scroll from "./src/Scrollview";
import Flat from "./src/Flatlist";

export default function App() {
  return (
    <View style={styles.container}>
      <Scroll/>
      <Flat/>
      <StatusBar style="auto" />
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
});
