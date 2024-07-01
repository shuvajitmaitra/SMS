import React from "react";
import * as Screen from "../Screens";
export default function (Stack) {
  return (
    <>
      <Stack.Screen name="ChatScreen" component={Screen.ChatScreen} />
    </>
  );
}
