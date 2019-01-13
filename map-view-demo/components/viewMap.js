import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

class ViewMap extends Component {

  componentDidMount(){
      console.log(this.props.navigation.state.params.region);
  }
    
  render() {
    return (
        <MapView
        style={ styles.map }
        initialRegion={this.props.navigation.state.params.region}
      />
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      }
  });



export default ViewMap;