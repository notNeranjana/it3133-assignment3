import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, TextInput } from "react-native-paper";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isSecure, setIsSecure] = useState(true);
  const [error, setError] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.body}>
          <Image source={require("../assets/logo.png")} style={styles.image} />

          <View style={styles.container}>
            <Text style={styles.h1}>Student Login</Text>

            <View style={styles.form}>
              <TextInput
                mode="outlined"
                label="Username"
                placeholder="Enter your username"
                style={styles.form.input}
                value={data.username}
                onChangeText={(text) => setData({ ...data, username: text })}
              />
              <TextInput
                mode="outlined"
                label="Password"
                placeholder="Enter your password"
                style={styles.form.input}
                value={data.password}
                onChangeText={(text) => setData({ ...data, password: text })}
                right={
                  <TextInput.Icon
                    icon="eye"
                    onPress={() => setIsSecure(!isSecure)}
                  />
                }
                secureTextEntry={isSecure}
              />

              <Button
                mode="contained"
                style={styles.button}
                onPress={() => console.log("Pressed")}
              >
                Login
              </Button>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footer.text}>&copy; 2025 UoV Student Care</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    width: "100%",
  },
  footer: {
    backgroundColor: "#4b0150",
    width: "100%",
    color: "#fff",
    padding: 20,
    text: {
      color: "#fff",
      textAlign: "center",
    },
  },
  form: {
    marginTop: 20,
    input: {
      width: "100%",
    },
  },
  h1: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#4b0150",
    marginTop: 20,
  },
});
