import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Fonts from "../constants/Fonts";
import AuthStack from "./AuthStack";

const Stack = createNativeStackNavigator();
function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <>{AuthStack(Stack)}</>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
