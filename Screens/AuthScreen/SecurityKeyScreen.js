import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

const SecurityKeyScreen = () => {
  const [key, setKey] = useState("");
  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let securityKey = "";
    for (let i = 0; i < 120; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      securityKey += characters[randomIndex];
    }
    return setKey(securityKey);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#ffff",
        }}
        source={require("../../assets/Images/securityKey.json")}
      />
      <View style={styles.textContainer}>
        <Text style={{}}>{key || "Khb:2!Y>$avgNf|9![ySw)KlYQz@!#&4"}</Text>
      </View>
      <Text>Save the security key to recover your account in the future.</Text>
    </View>
  );
};

export default SecurityKeyScreen;

const styles = StyleSheet.create({
  textContainer: {
    width: 300,
    height: 110,
    backgroundColor: "rgba(139, 168, 245, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(139, 168, 245, 0.1)",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
