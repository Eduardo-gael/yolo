import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default( { history } ) => (
  <View>
  <Text style={styles.tamaño.color}>tercera</Text>
  <Button color='green' title="principal" onPress={()=>history.push("/")} > </Button>
  </View>
);
const styles = StyleSheet.create({
  color:{
    color:'green',
    marginTop: 50
  },
  tamaño:{
    fontSize: 20,
    color:'green',
    marginTop: 50

  }
});
