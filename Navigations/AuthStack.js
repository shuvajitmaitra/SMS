import React from "react";
import * as Screen from "../Screens";
export default function (Stack) {
  return (
    <>
      <Stack.Screen name="InitialScreen" component={Screen.InitialScreen} />
      <Stack.Screen
        name="SecurityKeyScreen"
        component={Screen.SecurityKeyScreen}
      />
    </>
  );
}
