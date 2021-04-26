import * as React from "react";
import {
  View,
  Image,
  StyleProp,
  TextInput,
  ViewStyle,
  TextStyle,
  ImageStyle,
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

interface IRNTextInputProps extends IRNBounceableProps, TextInputProps {
  inputRef?: any;
  ImageComponent?: any;
  iconComponent?: any;
  placeholder?: string;
  disableButton?: boolean;
  buttonStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  iconImageStyle?: ImageStyle;
  style?: CustomStyleProp;
  onPress?: () => void;
}

const RNTextInput: React.FC<IRNTextInputProps> = ({
  style,
  inputRef,
  placeholder,
  buttonStyle,
  iconComponent,
  textInputStyle,
  iconImageStyle,
  disableButton = false,
  ImageComponent = Image,
  onPress,
  ...props
}) => {
  const [placeholderText, setPlaceholderText] = React.useState<
    string | undefined
  >(placeholder);
  React.useEffect(() => {
    setPlaceholderText(placeholder);
  }, []);

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <TextInput
        placeholderTextColor="#ead4ff"
        {...props}
        ref={inputRef}
        placeholder={placeholderText}
        style={[styles.textInputStyle, textInputStyle]}
      />
      {!disableButton &&
        (iconComponent || (
          <RNBounceable style={[styles.buttonStyle, buttonStyle]}>
            <ImageComponent
              source={defaultArrowIcon}
              style={[styles.iconImageStyle, iconImageStyle]}
            />
          </RNBounceable>
        ))}
    </View>
  );

  return (
    <RNBounceable
      bounceEffect={0.97}
      {...props}
      style={[styles.container, style]}
      onPress={onPress}
    >
      {renderContent()}
    </RNBounceable>
  );
};

export default RNTextInput;
