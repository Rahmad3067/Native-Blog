import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyLink from '../Mylink';


export default function AddPost () {
  return (
    <View style={styles.container}>

        <View style={styles.mainDive}>
          <Text style={{color:'white'}}>Add Post</Text>
        </View>


        <View style={styles.footerDiv}>
        <MyLink to="/homepage">Timeline</MyLink>
        <MyLink to="/addpost">Posts</MyLink>
        <MyLink to="/userprofile">Profile</MyLink>
        </View>

</View>
  );
}




const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: 'gray',
       width: '100%',
     },
     mainDive: {
         flex: 9,
         backgroundColor: 'gray',
         alignItems: 'center',
         justifyContent: 'center',
     },
     
     footerDiv: {
         flex: 1,
         backgroundColor: 'black',
         alignItems: 'center',
         justifyContent: 'center',
         display: 'flex',
         flexDirection: "row",
         justifyContent: 'space-evenly',

     },
   })