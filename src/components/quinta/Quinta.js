import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default( { history } ) => (
  <View>
  <Text style={styles.tamaño}>quinta</Text>
  <Button color='yellow' title="principal" onPress={()=>history.push("/")} > </Button>
  </View>
);
const styles = StyleSheet.create({
  color:{
    color:'yellow',
    marginTop: 50
  },
  tamaño:{
    fontSize: 20,
    color:'yellow',
    marginTop: 50

  }
});
