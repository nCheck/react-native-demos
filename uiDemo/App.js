import React, { Component } from 'react';
import { View } from 'react-native'
import { Font } from 'expo';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container, Header, Content, Accordion, Root, Button } from "native-base";

import HeaderExample  from './app/component/simpleAccordion';
import ActionSheetExample from './app/component/Actionsheet';


const AppNavigator = createStackNavigator(
  {
    myAcc: { screen: HeaderExample },
    actSheet : { screen: ActionSheetExample }
  },
  {
    initialRouteName : 'myAcc'
  }
);

const AppContainer = createAppContainer(AppNavigator);

class MainRoot extends Component {

  constructor(props){
    super(props);
    this.state = {
      loaded : false
    };
  }


  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState( { loaded : true } );
  }

  render() {
    if ( this.state.loaded ){

      return (
        <AppContainer>

        <Button
          title="Actsheet"
          onPress={() => this.props.navigation.navigate('actSheet',{ otherParam:"Shitface" } )}
        />

        </AppContainer>
      );

    }else{

      return <View/>

    }
  }
}


export default () =>
  <Root>
    <MainRoot />
  </Root>;