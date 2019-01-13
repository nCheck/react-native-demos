import React, { Component } from 'react';
import { View } from 'react-native'
import { Font } from 'expo';

import { Container, Header, Content, Accordion, Button, Text } from "native-base";
const dataArray = [
  { title: "11 Element", content: "Lorem ipsum dolor sit amet" },
  { title: "22 Element", content: "Lorem ipsum dolor sit amet" },
  { title: "33 Element", content: "Lorem ipsum dolor sit amet" }
];

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
          <Header />
          <Content padder>
            <Accordion
              dataArray={dataArray}
              icon="add"
              expandedIcon="remove"
              iconStyle={{ color: "green" }}
              expandedIconStyle={{ color: "red" }}
            />

         <Button
         onPress={() => this.props.navigation.navigate('actSheet',{ otherParam:"Shitface" } )}
          >
            <Text>Click Me!</Text>
          </Button>

          </Content>
        </Container>
      );
    }else{

      return <View/>

    }
  }
}   