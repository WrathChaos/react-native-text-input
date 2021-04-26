import React from "react";
import {
  Text,
  StatusBar,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import RNTextInput from "@freakycoder/react-native-text-input";

const App = () => {
  let _inputRef: TextInput | null = null;

  const renderClearInputButton = () => (
    <TouchableOpacity
      style={{
        width: 300,
        height: 50,
        marginTop: 64,
        borderRadius: 12,
        backgroundColor: "#d7aefb",
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        _inputRef?.clear();
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "bold" }}>Clear TextInput</Text>
    </TouchableOpacity>
  );

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
          inputRef={(ref: any) => (_inputRef = ref)}
          placeholder="E-mail"
          disableButton
          onChangeText={(text: string) => console.log("Text: ", text)}
          onPress={() => _inputRef?.focus()}
        />
        {renderClearInputButton()}
      </SafeAreaView>
    </>
  );
};

export default App;
