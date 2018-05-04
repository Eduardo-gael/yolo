import {NativeRouter,Route,Switch} from 'react-router-native'//principal
import Principal from './src/components/principal/Principal';//principal
import Segunda from './src/components/segunda/Segunda';//segunda
import Tercera from './src/components/tercera/Tercera';
import Cuarta from './src/components/cuarta/Cuarta';
import Quinta from './src/components/quinta/Quinta';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
<NativeRouter>
  <View>
    <Switch>
      <Route exact path="/"component={Principal}/> <Route exact path="/segunda"component={Segunda}/>
      <Route exact path="/tercera"component={Tercera}/> <Route exact path="/cuarta"component={Cuarta}/>
      <Route exact path="/Quinta"component={Quinta}/>
    </Switch>
  </View>
</NativeRouter>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
