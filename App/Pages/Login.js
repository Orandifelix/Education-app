import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Color from "../Shared/Color";
import { AntDesign } from "@expo/vector-icons";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./../Assets/Images/login.png")} />
      <View style={styles.containerText}>
        <Text style={styles.welcomeText}>Welcome to Codebox</Text>
        <Text style={{ textAlign: "center", marginTop: 80, fontSize: 25 }}>
          Login/Signup
        </Text>
        <View style={styles.button}>
          <AntDesign name="google" size={24} color="white"  style={{marginRight:10}}/>
          <Text style={{color:Color.white}}>Sign in With Google</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  welcomeText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
    
  },
  containerText:{ 
    paddingTop:50,
    marginTop: -20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20, 
    borderTopLeftRadius: 20,

  },
  button: {
    backgroundColor: Color.primary,
    padding: 10,
    margin : 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,



  }
});

export default Login;
