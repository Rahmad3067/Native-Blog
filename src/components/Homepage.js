import React from 'react';
import MyLink from './Mylink';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';



export default function Homepage() {
    return (
        <View style={styles.container}>

        <View style={styles.mainDive}>
          <Text style={{color:'white'}}>Home</Text>
        </View>


        <View style={styles.footerDiv}>
        <MyLink style={styles.linkbt} to="/homepage">Timeline</MyLink>
        <MyLink style={styles.linkbt} to="/addpost">Posts</MyLink>
        <MyLink style={styles.linkbt} to="/userprofile">Profile</MyLink>
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