import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome firstName={'Max'} />
      <Welcome firstName={'Kevin'} />
      <Text style={styles.bigText}>🔥🦞 {'\n'}Woooh! {'\n'}🍝💻</Text>
      <Text>Emojis are code too.</Text>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bigText:{
    fontSize: '80vw',
    color: 'white',
    textAlign: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
