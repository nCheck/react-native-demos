import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GeolocationExample from './components/geoLocation';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ViewMap from './components/viewMap';
import BarcodeScannerExample from './components/QrScanner';








class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }

    this.setRegion = this.setRegion.bind(this);
    this.logRegion = this.logRegion.bind(this);
  }

  setRegion(latitude , longitude){

    console.log(this.state.region.latitude);

    this.setState( (prev)=>({
      region : {
        latitude : latitude,
        longitude : longitude,
        latitudeDelta : 0.0922,
        longitudeDelta : 0.0422
      }
    }) );

  }

  logRegion(){
    console.log(this.state.region.latitude)
  }

  render() {
    return (
      <View style={styles.container}>
        <GeolocationExample setRegion={ this.setRegion }/>

        <Button
          title="Log my State"
          onPress={ this.logRegion }
        />

        <Text>Load Location on Map</Text>

        <Button
          title="Look on Map"
          onPress={() => this.props.navigation.navigate('MapViewer',{ otherParam:"Shitface", region:this.state.region } )}
        />

        <Text>QR Code Scanner</Text>

        <Button
          title="Scan Code"
          onPress={() => this.props.navigation.navigate('QrScan',{ otherParam:"Shitface", region:this.state.region } )}
        />
      </View>
    );
  }
}


const MainStack = createStackNavigator({
  Home: {
    screen: Home
  },
  MapViewer:{
    screen : ViewMap
  },
  QrScan:{
    screen : BarcodeScannerExample
  }
} , {
  initialRouteName : 'Home',
  navigationOptions: {
    tabBarLabel: 'Home!',
  }
});

const MainCon = createAppContainer(MainStack);

class App extends React.Component {

  render(){
    return(
       <MainCon/>
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


export default App;