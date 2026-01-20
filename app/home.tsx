import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};
const style=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor:'red'
  }
})

export default Home;
