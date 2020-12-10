
  import React, { Component } from 'react';
  import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
  import mesdemande from './mesdemande'
  import { NavigationContainer } from '@react-navigation/native';

  import Dataitem from './Dataitem'

  export default class ListeAnnonce extends Component {
  
    render() {
      return (
        <Container>
       
          <Content>
            <List>
            <Dataitem />
            </List>
          </Content>
        </Container>
      );
    }
  }