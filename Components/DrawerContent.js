import React from "react";
import {
	useTheme,
	Avatar,
	Title,
	Drawer,
	TouchableRipple,
} from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text, View, StyleSheet } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DrawerContent(props) {
	return (
		<SafeAreaView style={{ flex: 1, marginTop: 16 }}>
			<View style={styles.drawerContent}>
				<View style={{ alignItems: "center", justifyContent: "center", borderBottomColor:"gray", borderBottomWidth:0.5, paddingBottom:12 }}>
					<Avatar.Image
						source={require("../assets/avatar.jpg")}
						size={70}
					/>
					<View style={{ marginLeft: 15, flexDirection: "column" }}>
						<Title style={styles.title}>Nguyen Thi Chinh</Title>
					</View>
					<View style={styles.dateTimeWrap}>
						<Text style={styles.dateTime}>
							Today: {new Date().toDateString()}
						</Text>
					</View>
				</View>

				<Drawer.Section style={styles.drawerSection}>
					<DrawerItem
						icon={({ color, size }) => (
							<Icon name="home-outline" color={color} size={size} />
						)}
						label="Home"
						onPress={() => {
							props.navigation.navigate("Todo");
						}}
					/>
					
					<DrawerItem
						icon={({ color, size }) => (
							<Icon
								name="file-document-edit-outline"
								color={color}
								size={size}
							/>
						)}
						label="Add List todo"
						onPress={() => {
							props.navigation.navigate("AddList");
						}}
					/>
					<DrawerItem
						icon={({ color, size }) => (
							<Icon name="chart-bar" color={color} size={size} />
						)}
						label="Report"
						onPress={() => {
							props.navigation.navigate("Report");
						}}
					/>
					
				</Drawer.Section>
				
			</View>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					icon={({ color, size }) => (
						<Icon name="exit-to-app" color={color} size={size} />
					)}
					label="Sign Out"
					onPress={() => {
						signOut();
					}}
				/>
			</Drawer.Section>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},

	title: {
		fontSize: 14,
		marginTop: 3,
		fontWeight: "bold",
	},
	row: {
		marginTop: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	section: {
		flexDirection: "row",
		alignItems: "center",
		marginRight: 15,
	},
	paragraph: {
		fontWeight: "bold",
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		borderTopColor: "#f4f4f4",
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	preference: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
	dateTimeWrap:{
		borderBottomWidth:4,
		borderBottomColor:"#f5cd79",
		paddingBottom:6
	},
	dateTime:{
		color:"#f5cd79",
		fontWeight:'bold'
	}
});
