import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#fff",
        }}
        source={require("../../assets/Images/hello.json")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // Ensure the background color matches your app theme
  },
});
