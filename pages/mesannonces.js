
import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item } from 'native-base';
import DataItem from './Dataitem'
export default class Mesannonces extends Component {
  render() {
    return (
      <Container>
       
      <Content>
        <List>
   
        <DataItem  />
        </List>
      </Content>
    </Container>
    );
  }
}