import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default( { history } ) => (
  <View>
  <Text style={styles.tamaño}>cuarta</Text>
  <Button color='gray' title="principal" onPress={()=>history.push("/")} > </Button>
  </View>
);
const styles = StyleSheet.create({
  color:{
    color:'gray',
    marginTop: 50
  },
  tamaño:{
    fontSize: 20,
    color: 'gray',
    marginTop: 50
  }
});
