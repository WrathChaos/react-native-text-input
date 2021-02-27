import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  textInputStyle: TextStyle;
  buttonStyle: ViewStyle;
  iconImageStyle: ImageStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 60,
    width: 300,
    paddingLeft: 16,
    paddingRight: 3,
    borderRadius: 16,
    justifyContent: "center",
    backgroundColor: "#fdfdfd",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInputStyle: {
    width: "78%",
    fontSize: 16,
    fontWeight: "800",
  },
  buttonStyle: {
    width: 55,
    height: 55,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#933fe3",
  },
  iconImageStyle: {
    width: 20,
    height: 20,
    tintColor: "#fdfdfd",
  },
});
