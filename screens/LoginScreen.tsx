import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import FontSize from "../constants/FontSize";
import Spacing from "../constants/Spacing";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Screen from "../components/Screen";
import Input from "../components/Input";
import Button from "../components/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {

	
	const handleLogin = () => navigate("Home");

	return (
		<Screen>
			<Text
				style={{
					marginTop: 80,
					fontSize: FontSize.xxl,
					color: Colors.text,
					fontFamily: Font["poppins-semiBold"],
					textAlign: "center",
				}}
			>
				<MaterialIcons name="fitness-center" size={30} color="#00FFFF" />
				Knockout
			</Text>
			<Text
				style={{
					marginTop: 100,
					fontSize: FontSize.xxl,
					color: Colors.text,
					fontFamily: Font["poppins-semiBold"],
					textAlign: "center",
				}}
			>
				Bem-vindo de volta
			</Text>
			<Text
				style={{
					fontSize: FontSize.sm,
					color: Colors.text,
					fontFamily: Font["poppins-regular"],
					textAlign: "center",
				}}
			>
				Estamos felizes em tê-lo de volta
			</Text>
			<View
				style={{
					alignItems: "center",
					paddingVertical: Spacing.padding.lg,
					justifyContent: "center",
				}}
			>
				<Input
					placeholder="Email"
					style={{ display: "flex" }}
					keyboardType="email-address"
				>
					<Feather name="user" size={24} color={Colors.text} />
				</Input>
				<Input
					placeholder="Palavra-passe"
					secureTextEntry={true}
				>
					<Feather name="key" size={24} color={Colors.text} />
				</Input>
				<Button
					style={{ width: 400, margin: 10 }}
					onPress={handleLogin}
				>
					Entrar
				</Button>
			</View>
			<TouchableOpacity
				activeOpacity={0.7}
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					style={{
						fontSize: FontSize.base,
						color: Colors.text,
						fontFamily: Font["poppins-regular"],
						textAlign: "center",
						margin: 2,
					}}
				>
					Não tem uma conta?
				</Text>
				<Text
					style={{
						fontSize: FontSize.base,
						color: Colors.accent,
						fontFamily: Font["poppins-regular"],
						textAlign: "center",
						margin: 2,
					}}
				>
					Crie uma.
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					margin: 30,
					marginTop: 100,
				}}
			>
				<Text
					style={{
						fontSize: FontSize.xs,
						color: Colors.border,
						fontFamily: Font["poppins-regular"],
						textAlign: "center",
						padding: 10,
					}}
				>
					Usamos cookies, como (quase) todos os outros app. Você pode encontrar
					todas as informações sobre isso em nossa política de privacidade.
					<Text
						style={{
							fontSize: FontSize.xs,
							color: Colors.accent,
							fontFamily: Font["poppins-regular"],
							textAlign: "center",
						}}
					>
						Saiba mais.
					</Text>
				</Text>
			</TouchableOpacity>
		</Screen>
	);
};

export default LoginScreen;
