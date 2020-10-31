import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Colors from "../Constants/Colors";

export default function TabAll() {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.today}>Today</Text>
				<Text style={styles.dateTime}>{new Date().toDateString()}</Text>
			</View>
			<ScrollView>
				
			</ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		paddingTop: 15,
		paddingHorizontal: 15,
		paddingBottom: 5,
		justifyContent: "space-between",
	},
	today: {
		fontSize: 25,
		fontWeight: "700",
		color: Colors.tabColor,
	},
	dateTime: {
		fontSize: 18,
		fontWeight: "700",
	},
});
