import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
export default function App(addValue) {
  const [value,setValue] = useState();
  
  async function addValue(arg){
    setValue(arg);
  }
  useEffect( () => {
    addValue()
  })
  return (
    <View style={styles.container}>
      <Text>{value}</Text>
      <Text>0</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.num} onPress={addValue({value:1})}><Text>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={addValue({value:2})}><Text>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={addValue({value:3})}><Text>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={addValue({value:"-"})}><Text>-</Text></TouchableOpacity>
      </View>
      {/* <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.num} onPress={value = 4}><Text>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={value = 5}><Text>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={value = 6}><Text>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={value = "+"}><Text>+</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.num} onPress={value = 7}><Text>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={value = 8}><Text>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={value = 9}><Text>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={value = "*"}><Text>*</Text></TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.num} onPress={value = 0}><Text>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={value = 0}><Text>C</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={value = "="}><Text>=</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={value = "/"}><Text>/</Text></TouchableOpacity>
      </View> */}
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
  num:{
    backgroundColor: "grey",
  },
  op:{
    backgroundColor: "orange",
  },
});
