import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Color from "../Shared/Color";
import { AntDesign } from "@expo/vector-icons";
import * as webBrowser  from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

const Login = () => {

  webBrowser.maybeCompleteAuthSession();
const [request, response, promptAsync] = Google.useAuthRequest({
  androidClientId:
    "572768065371-752a5caejk2o5gg62c6h9n30c80c9vr3.apps.googleusercontent.com",
  expoClientId:
    "572768065371-su6dcilfj684fvt7k2m3gjgqts2nndsp.apps.googleusercontent.com",
  redirectUri: "https://auth.expo.io/orandifelix/codebox",
});



  return (
    <View style={styles.container}>
      <Image source={require("./../Assets/Images/login.png")} />
      <View style={styles.containerText}>
        <Text style={styles.welcomeText}>Welcome to Codebox</Text>
        <Text style={{ textAlign: "center", marginTop: 80, fontSize: 25 }}>
          Login/Signup
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>promptAsync()}>
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: Color.white }}>Sign in With Google</Text>
        </TouchableOpacity>
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
