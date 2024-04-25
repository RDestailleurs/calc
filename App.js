import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect, useState } from "react";
export default function App(addValue) {
  const [value,setValue] = useState(init);
  const [result, setResult] = useState(init);
  const init = 0;
  async function addValue(arg){
    setValue(arg);
  }
  async function operate(){
    setResult(eval(value));
    setValue(init);
  }
  useEffect( () => {
    setResult();
    addValue();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
      <Text style={styles.text}>{result}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"1")}><Text style={styles.text}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"2")}><Text style={styles.text}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"3")}><Text style={styles.text}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={() => addValue(value+"-")}><Text style={styles.text}>-</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"4")}><Text style={styles.text}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"5")}><Text style={styles.text}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"6")}><Text style={styles.text}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={() => addValue(value+"+")}><Text style={styles.text}>+</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"7")}><Text style={styles.text}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"8")}><Text style={styles.text}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"9")}><Text style={styles.text}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={() => addValue(value+"*")}><Text style={styles.text}>*</Text></TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.num} onPress={() => addValue(value+"0")}><Text style={styles.text}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={() => addValue(init)}><Text style={styles.text}>C</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={() => operate()}><Text style={styles.text}>=</Text></TouchableOpacity>
        <TouchableOpacity style={styles.op} onPress={() => addValue(value+"/")}><Text style={styles.text}>/</Text></TouchableOpacity>
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
    fontSize: 20,
  },
  num:{
    backgroundColor: "grey",
    
  },
  op:{
    backgroundColor: "orange",
  },
  row:{
    flexDirection: "row",
    
  },
  text:{
    fontSize: 40,
  }
});
