import * as React from "react";
import {
  View,
  Image,
  StyleProp,
  TextInput,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ViewProps,
  TextInputProps,
} from "react-native";
import RNBounceable, {
  IRNBounceableProps,
} from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./RNTextInput.style";

const defaultArrowIcon = require("./local-assets/right-arrow.png");

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface ISource {
  source: string | { uri: string };
}

interface IRNTextInputProps extends IRNBounceableProps, TextInputProps {
  ImageComponent?: any;
  placeholder?: string;
  buttonStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  iconImageStyle?: ImageStyle;
  disableButton?: boolean;
  style?: CustomStyleProp;
  onPress?: () => void;
}

const RNTextInput: React.FC<IRNTextInputProps> = ({
  style,
  placeholder,
  buttonStyle,
  textInputStyle,
  iconImageStyle,
  disableButton = false,
  ImageComponent = Image,
  onPress,
  ...props
}) => {
  let inputRef: TextInput | null = null;

  const handleOnPress = () => {
    inputRef?.focus();
    onPress && onPress();
  };

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <TextInput
        placeholderTextColor="#ead4ff"
        {...props}
        placeholder={placeholder}
        ref={(ref) => (inputRef = ref)}
        style={[styles.textInputStyle, textInputStyle]}
      />
      {!disableButton && (
        <RNBounceable style={[styles.buttonStyle, buttonStyle]}>
          <ImageComponent
            source={defaultArrowIcon}
            style={[styles.iconImageStyle, iconImageStyle]}
          />
        </RNBounceable>
      )}
    </View>
  );

  return (
    <RNBounceable
      bounceEffect={0.97}
      {...props}
      style={[styles.container, style]}
      onPress={handleOnPress}
    >
      {renderContent()}
    </RNBounceable>
  );
};

export default RNTextInput;
