import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

import Input from "../components/Input";
import Submit from "../components/Submit";

const RegisterScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/signup.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Let's Get Started</Text>
        <Text style={styles.textBody}>
          Create an account to get all features
        </Text>
        <Input name="Full Name" icon="user" />
        <Input name="Email" icon="envelope" />
        <Input name="Phone" icon="phone" />
        <Input name="Password" icon="lock" pass={true} />
        <Input name="Confirm Password" icon="lock" pass={true} />
        <Submit color="#0251ce" title="CREATE" />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textBody}>Aiready have an account</Text>
          <Text
            onPress={() => navigation.navigate("login")}
            style={[styles.textBody, { color: "blue" }]}
          >
            Login here
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
  },
  image: {
    width: 400,
    height: 250,
    marginVertical: 10,
  },
  textTitle: {
    fontSize: 40,
    fontFamily: "Roboto",
    marginVertical: 5,
  },
  textBody: {
    fontSize: 16,
    fontFamily: "Roboto",
  },
});

export default RegisterScreen;
