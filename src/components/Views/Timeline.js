import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyLink from '../Mylink';


export default function Timeline () {
  return (
    <View style={{ flex: 1, backgroundColor: 'gray', width: '100%', }}>

        <View style={{ flex: 9, backgroundColor: 'gray',alignItems: 'center', justifyContent: 'center',  }}>
          <Text style={{color:'white'}}>Home</Text>
        </View>


        <View style={{ flex: 1, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: "row" }}>
        <MyLink to="/homepage">Timeline</MyLink>
        <MyLink to="/addpost">Add Post</MyLink>
        <MyLink to="/userprofile">Profile</MyLink>
        </View>

</View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondDiv: {
    display: 'flex',
    alignItems: 'flex-end',
    marginTop: 620,
    
    flexDirection: 'row',
    
    
  }
});