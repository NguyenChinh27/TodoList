import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../Constants/Colors";

const TodoItem = ({id, todoItem, _delete,navigate }) => {
	
	return (
		<TouchableOpacity style={styles.container} onPress={()=>{navigate("TodoDetail",{todoItem})}}>

				<View style={styles.titleWrap}>
					<View
						style={styles.status}
						backgroundColor={todoItem.status ? "#47B5A0" : "#E84946"}
					/>
					<View>
						<Text style={styles.title}>{todoItem.title}</Text>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={() => _delete(id)}>
						<View style={styles.statusIcon} backgroundColor="#0aa0f6">
							<MaterialIcons name="delete" size={25} color="#fff" />
						</View>
					</TouchableOpacity>
				</View>

		</TouchableOpacity>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	container: {
		padding: 15,
		height: 80,
		backgroundColor: Colors.primary_item,
		flexDirection: "row",
		width: "100%",
		borderRadius: 10,
		marginVertical: 8,
		alignItems: "center",
		justifyContent: "space-between",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	titleWrap: {
		flexDirection: "row",
		alignItems: "center",
	},
	title: {
		fontWeight: "700",
		fontSize: 20,
		maxWidth: 220,
		marginLeft: 8,
	},
	statusIcon: {
		height: 35,
		width: 35,
		borderRadius: 20,
		marginLeft: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	buttonContainer: {
		flexDirection: "row",
	},
	status: {
		width: 12,
		height: 12,
		borderRadius: 999,
		marginHorizontal: 4,
	},
});
