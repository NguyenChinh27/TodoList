import React from "react";
import {
	Text,
	View,
	StyleSheet,
	Dimensions,
	ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import Colors from "../Constants/Colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default function TodoScreen({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/todolist1.jpg")}
			style={{
				width: width,
				height: height,
				flex: 1,
				position: "absolute",
				top: -95,
				right: -4,
				alignSelf: "stretch",
			}}
		>
			<View style={styles.container}>
				<View style={styles.borderContainer}>
					<View style={styles.wrapp}>
						<Text style={styles.title}>
							Todo
							<Text
								style={{
									fontSize: 50,
									fontWeight: "bold",
									color: Colors.primary,
								}}
							>
								Lists
							</Text>
						</Text>
						<Text
							style={{
								textAlign: "center",
								fontSize: 20,
								fontFamily: "domestic_manners",
								color: "black",
							}}
						>
							Create Todo in here
						</Text>
					</View>
					<View style={{ marginVertical: 48, alignItems: "center" }}>
						<TouchableOpacity
							style={styles.addList}
							onPress={() => {
								navigation.navigate("AddList");
							}}
						>
							<AntDesign
								name="plus"
								size={20}
								fontWeight={"bold"}
								color={Colors.white}
							/>
						</TouchableOpacity>
						<Text style={styles.add}>Add List</Text>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	borderContainer: {},
	title: {
		fontSize: 50,
		color: "black",
		paddingHorizontal: 64,
		fontFamily: "KGYouWontBringMeDown",
	},
	wrapp: {},

	addList: {
		borderWidth: 2,
		borderColor: Colors.primary,
		borderRadius: 40,
		padding: 30,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: Colors.primary,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	add: {
		color: Colors.primary,
		fontWeight: "bold",
		fontSize: 14,
		marginTop: 16,
	},
});
