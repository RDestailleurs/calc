import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function App() {
  let value = 0;
const [result, setResult] = setState();
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Text>{result}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={}><Text>1</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>2</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>3</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>-</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={}><Text>4</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>5</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>6</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>+</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={}><Text>7</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>8</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>9</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>*</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={}><Text>0</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>C</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>=</Text></TouchableOpacity>
        <TouchableOpacity onPress={}><Text>/</Text></TouchableOpacity>
      </View>
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
