import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

import Inputs from "../components/Input";
import Submit from "../components/Submit";
import Account from "../components/Account";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/login.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Welcome back</Text>
        <Text style={styles.textBody}>Log in to your existant account</Text>
        <View style={{ marginTop: 20 }} />
        <Inputs name="Email" icon="user" />
        <Inputs name="Password" icon="lock" pass={true} />
        <View style={{ width: "90%" }}>
          <Text style={([styles.textBody], { alignSelf: "flex-end" })}>
            Forgot Password?
          </Text>
        </View>
        <Submit title="LOG IN" color="#0148a4" navigation={navigation} />
        <Text style={styles.textBody}>Or connect using</Text>
        <View style={{ flexDirection: "row" }}>
          <Account color="#3b5c8f" icon="meta" title="Facebook" />
          <Account color="#ec482f" icon="google" title="Google" />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 5 }}>
          <Text style={styles.textBody}>Don't Have an account</Text>
          <Text
            onPress={() => navigation.navigate("signin")}
            style={[styles.textBody, { color: "blue" }]}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 150,
    marginVertical: 10,
  },
  textTitle: {
    fontFamily: "Roboto",
    fontSize: 40,
    marginVertical: 10,
  },
  textBody: {
    fontFamily: "Roboto",
    fontSize: 16,
  },
});

export default LoginScreen;
