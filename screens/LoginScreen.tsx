import React from 'react';
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from '../types';
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Screen from "../components/Screen";

type Props = NativeStackScreenProps<RootStackParamList, "Login">

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {


  return (
    <Screen>
      <Text style={{
            fontSize: FontSize.xxl,
            color: Colors.text,
            fontFamily: Font["poppins-semiBold"],
            textAlign: "center",
          }}>Hello, it's a login screen</Text>
    </Screen>
  )
}

export default LoginScreen;