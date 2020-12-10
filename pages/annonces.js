import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Title } from 'native-base';
import ListeAnnonce from './listeAnnonce';
import Mesannonces from './mesannonces';
import Mesdemande from './mesdemande';

export default class TabsAnnoces extends Component {
  render() {
    return (
      <Container>

        <Tabs >
      
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} heading="Liste des Annonces">
            <ListeAnnonce/>
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}}  heading="Mes Annonces">
            <Mesannonces/>
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}}  heading="Mes Demmandes">
            <Mesdemande/>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}