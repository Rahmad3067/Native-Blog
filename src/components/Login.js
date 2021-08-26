import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { useHistory } from "react-router-dom";

export default function Login () {
    const [toggle, setToggle] = useState(true);
    const [id, setId] = useState(); 
    

    const history = useHistory();



    const handlePress = () => {
        if(id <= 10 && id >= 1 ){
            history.push("/homepage");
        } 
	};

    const handleChange = (val) => {
        setId(parseInt(val))
    }


  return (
      
    <View style={styles.container}>
      <TextInput value={id} onChangeText={handleChange} style={styles.emailInput} type='username' placeholder={'Enter Username...'} />
      <TouchableOpacity onPress={handlePress} style={styles.btnLogin}><Text style={styles.txtLogin}>Sign In</Text></TouchableOpacity>
    </View>
  );
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnLogin: {
      backgroundColor: "black",
      padding: 8,
      borderRadius: 5,
      marginTop: 8,
    },
    txtLogin : {
      color: 'white',
    },
    emailInput: {
      padding: 12,
          borderWidth: 1,
          borderColor: "blue",
          margin: 10,
    },
  
  });
  
