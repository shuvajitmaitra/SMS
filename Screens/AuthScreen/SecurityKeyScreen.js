import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";

import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

const SecurityKeyScreen = () => {
  const [key, setKey] = useState("");
  const navigation = useNavigation();
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
        <TouchableOpacity
          onPress={() => Clipboard.setStringAsync(key)}
          style={styles.iconContainer}
        >
          <Ionicons name="copy-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{}}>{key || "Khb:2!Y>$avgNf|9![ySw)KlYQz@!#&4"}</Text>
      </View>
      <Text style={styles.noticeText}>
        <Text style={{ color: "red" }}>Note: </Text>
        Save the security key to recover your account in the future. If you
        forget your password, you will need this key to recover your account.
        Without this key, you won't be able to recover your account.
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChatScreen");
        }}
        style={styles.loginButtonContainer}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecurityKeyScreen;

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  loginButtonContainer: {
    marginTop: responsiveScreenHeight(10),
    backgroundColor: "#3f6ad8",
    width: "30%",
    minHeight: 35,
    borderRadius: 100,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  noticeText: {
    paddingHorizontal: responsiveScreenWidth(4),
    marginTop: responsiveScreenHeight(2),
    color: "gray",
  },
  iconContainer: {
    alignSelf: "flex-end",
    marginBottom: responsiveScreenHeight(1),
  },
  textContainer: {
    width: 300,
    minHeight: responsiveScreenHeight(8),
    backgroundColor: "rgba(139, 168, 245, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(139, 168, 245, 0.1)",
    borderRadius: 10,
    padding: 20,
    paddingTop: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
