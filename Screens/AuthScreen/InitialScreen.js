import React, { useRef, useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LottieView from "lottie-react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const InitialScreen = () => {
  const navigation = useNavigation();
  const animation = useRef(null);
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        loop
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#ffff",
        }}
        source={require("../../assets/Images/hello.json")}
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Display Name</Text>
        <TextInput
          spellCheck={false}
          autoCorrect={false}
          style={styles.TextInput}
          placeholder="Enter Name"
          placeholderTextColor="#aaa"
        />

        <Text style={styles.label}>Login Pass</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={styles.TextInput}
            placeholder="Enter Password"
            placeholderTextColor="#aaa"
            maxLength={6}
          />
          <MaterialCommunityIcons
            name={!showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aaa"
            style={{ marginLeft: -40 }}
            onPress={toggleShowPassword}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SecurityKeyScreen");
          }}
          style={styles.loginButtonContainer}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  label: {
    color: "black",
    fontWeight: "600",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  loginButtonContainer: {
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
  TextInput: {
    backgroundColor: "rgba(139, 168, 245, 0.1)",
    // color: "#3f6ad8",

    // color: "#8ba8f5",
    width: "100%",
    minHeight: 40,
    borderRadius: 100,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderWidth: 1,
    borderColor: "rgba(139, 168, 245, 0.1)",
  },
  formContainer: {
    // backgroundColor: "pink",
    width: "80%",
  },
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
