import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Button } from 'react-native';
const Form1 = ({ navigation }) => {
    return  (
     
  
  
      <View style={{ margin:40 ,marginTop: 400}}>
       <Text>FICHE TECHNIQUE DE BIEN</Text>
  
      <Button 
      
      title="NEXT"
      color="#daa520"
      onPress={() => navigation.navigate('Etape2') }
  >
    
    </Button>
  </View>
  
        
  
      
    );
  };

export default Form1
