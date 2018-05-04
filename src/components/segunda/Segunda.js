import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
export default( { history } ) => (
  <View>
  <Text style={styles.tamaño}>segunda</Text>
  <Button color='red' title="principal" onPress={()=>history.push("/")} > </Button>
  </View>
);
const styles = StyleSheet.create({
  color:{
    color:'red',
    marginTop: 50
},
 tamaño:{
   fontSize: 20,
   color:'red',
   marginTop: 50
 }
});
