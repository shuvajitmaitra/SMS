import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Fonts from "./constants/Fonts";
import Routes from "./Navigations/Routes";
import Splash from "./Screens/SplashScreen/Splash";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, error] = useFonts({
    poppins_light: require("./assets/Fonts/Poppins-Light.ttf"),
    poppins_regular: require("./assets/Fonts/Poppins-Regular.ttf"),
    poppins_medium: require("./assets/Fonts/Poppins-Medium.ttf"),
    poppins_semiBold: require("./assets/Fonts/Poppins-SemiBold.ttf"),
    poppins_bold: require("./assets/Fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    } else if (error) {
      console.error("Error loading fonts", error);
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return <Splash />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Routes />
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
