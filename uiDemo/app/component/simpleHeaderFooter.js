import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { Font } from 'expo';

export default class HeaderExample extends Component {

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
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
        </Container>
      );
    }else{

      return <View/>

    }
  }
}