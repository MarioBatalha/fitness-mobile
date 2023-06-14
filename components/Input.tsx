import { ReactNode, useState, useEffect } from "react";
import { StyleProp, TextInput, TextStyle, View, ViewStyle } from "react-native";
import Font from "../constants/Font";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";

interface Props {
  children?: any;
  value?: string;
  onChangeText?: Event;
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  textStyle?: StyleProp<TextStyle>;
  keyboardType?: string;
  secureTextEntry?: boolean;
  onPress?: () => void;
}

const Input: React.FC<Props> = ({ children, style, placeholder, value, onChangeText, onPress,secureTextEntry }) => {


  return (
    <View
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing.padding.base,
            paddingHorizontal: Spacing.padding.base,
            borderRadius: Spacing.borderRadius.base,
            marginVertical: Spacing.margin.base,
            
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInput
          secureTextEntry={secureTextEntry}
          value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.text}
            style={{
              fontSize: FontSize.base,
              width: 350,
              color: "#FFF"
            }}
          />
          {children}
        </View>

  );
};

export default Input;