import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import RNTextInput from "@freakycoder/react-native-text-input";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#933fe3",
        }}
      >
        <RNTextInput
          placeholder="E-mail"
          onChangeText={(text: string) => console.log("Text: ", text)}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
