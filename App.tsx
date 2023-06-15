import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ThemesPage from './pages/ThemesPage';
import Create from './pages/Create';
import Highlight from './pages/Highlight';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemesPage />
      <Create />
      <Highlight />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5e4',
    height: "100%"
  },
});
