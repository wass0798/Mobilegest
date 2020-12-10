import React from 'react'

import { StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
const Form3 = ({ navigation }) => {
    return  (
     
  
  
      <View style={{ margin:40 ,marginTop: 400}}>
       <Text>Etape 3</Text>
  
      <Button 
      
      title="Envoyer"
      color="#daa520"
      onPress={() => navigation.navigate('envoyer') }
  >
    
    </Button>
    <Button 
      
      title="Back"
      color="#daa520"
      onPress={() => navigation.navigate('Etape2') }
  >
    
    </Button>
  </View>
  
        
  
      
    );
  };


export default Form3
