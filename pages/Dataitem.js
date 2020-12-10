

  import React from "react";
import { FlatList,   View,Image  } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title,thumbnail,Thumbnail,Button } from "native-base";

import Mesdemande from './mesdemande';

 
export default class DataItem extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: "1",
          date: "02/12/2020",
          descr: "Appartement en centre ville",
          email: "wassima@gmail.com",
          id_photo: require("./images/1.jpg"),
          id_piece_j: "1",
          lat: "",
          lon: "",
          nomcomplet: "wassima Moutaouakil",
          prix: "2000",
          surface: "60m²",
          type_bien: 'appartement',
          type_ops: "location"
        },
        {
          id: "2",
          date: "09/12/2020",
          descr: "4 chambres,jardin",
          email: "khadija@gmail.com",
          id_photo: require("./images/2.jpg"),
          id_piece_j: "2",
          lat: "",
          lon: "",
          nomcomplet: "Khadija asaber",
          prix: "40000",
          surface: "100m²",
          type_bien: "Villa",
          type_ops: "vente"
        },
        {
          id: "3",
          date: "05/11/2020",
          descr: "100 arbres",
          email: "fati@gmail.com",
          id_photo: require("./images/3.jpg"),
          id_piece_j: "3",
          lat: "",
          lon: "",
          nomcomplet: "Fati taouil",
          prix: "12000",
          surface: "1330m²",
          type_bien: "Terre",
          type_ops: "Vente"
        }
      ],
      stickyHeaderIndices: []
    };
  }
  componentWillMount() {
    var arr = [];
  
    arr.push(0);
    this.setState({
      stickyHeaderIndices: arr
    });
  }
 
  renderItem = ({item }) => {
   
    return (
   
      <ListItem thumbnail>
          
      <Left>
        
      <Thumbnail square source={ item.id_photo}/>
     </Left>
     
      <Body>
        <Text numberOfLines={2}>{item.type_bien}</Text>
        <Text note numberOfLines={2}>{item.type_ops}</Text>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
            <Text note>{item.descr}</Text>
          
        </View>
      </Body>
      <Right>
             <Button transparent onPress={() => this._onPress(item)}  >
               <Text>Détails</Text>
               
             </Button>
           </Right>
    </ListItem>
      
    );
  };
 
  render() {
   
    return (
      
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
       
      />
    );
  }
}
