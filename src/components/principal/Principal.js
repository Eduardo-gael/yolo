import React from 'react';
import {View, Text, Button, StyleSheet,Image} from 'react-native';
import {TextInput } from 'react-native';
export default( { history } ) => (

  <View>
    <Text style={styles.color}>principal</Text>
    <Button title="cambio a segunda" onPress={()=>history.push("/segunda")}> </Button>
    <Button title="cambio a tercera" onPress={()=>history.push("/tercera")}> </Button>
    <Button title="cambio a quinta" onPress={()=>history.push("/quinta")}> </Button>
    <Button title="ultima ventana" onPress={()=>history.push("/quinta")}> </Button>
    <Image style={{width: 50, height: 50}} source={require('../../assets/image/kyubi.jpg')}/>
    <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      />
  </View>
);
const styles = StyleSheet.create({
  color:{
    color:'blue',
    marginTop: 50
 }
});
