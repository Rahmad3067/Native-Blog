import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import Homepage from './src/components/Homepage';
import Login from './src/components/Login';
import Timeline from './src/components/Views/Timeline';
import AddPost from './src/components/Views/AddPost';
import UserProfile from './src/components/Views/UsersProfile';


export default function App() {
  return (
    <View style={styles.container}>
			<NativeRouter>
				<Route exact path="/" component={Login} />
				<Route exact path="/homepage" component={Homepage} />
				<Route exact path="/timeline" component={Timeline} />
				<Route exact path="/addPost" component={AddPost} />
				<Route exact path="/userprofile" component={UserProfile} />
			</NativeRouter>
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
});
