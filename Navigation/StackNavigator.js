import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, StyleSheet, Button } from "react-native";
import Colors from "../Constants/Colors";

import Icon from "react-native-vector-icons/Ionicons";
import TodoScreen from "../Screens/TodoScreen";
import AddListTodoScreen from "../Screens/AddListTodoScreen";
import TodoDetailScreen from "../Screens/TodoDetailScreen";
import TopTabNavigator from "../Navigation/TopTabNavigator";

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: Colors.transparent,
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		elevation: 0,
		shadowOpacity: 0,
		borderBottomWidth: 0,
		
	},
	headerTintColor: Colors.primary,
	headerBackTitle: "Back",
};

const TodoStackNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Todo"
				component={TodoScreen}
				options={{
					title: "Home",
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: "bold",
						alignSelf: "center",
						width: "100%",
					},
					headerLeft: () => (
						<Icon.Button
							name="md-menu"
							size={30}
							backgroundColor={Colors.transparent}
							style={{ marginLeft: 12 }}
							onPress={() => navigation.openDrawer()}
							color={Colors.primary}
						></Icon.Button>
					),
				}}
			/>
			<Stack.Screen
				name="AddList"
				component={AddListTodoScreen}
				options={{ title: "Add List" }}
			/>
			<Stack.Screen name="TodoDetail" component={TodoDetailScreen} />
		</Stack.Navigator>
	);
};

const ReportStackNavigator = ({ navigation }) => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Report"
				component={TopTabNavigator}
				options={{
					title: "Report",
					headerTintColor: Colors.tabColor,
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: "bold",
						alignSelf: "center",
						width: "100%",
						
					},
					
					headerLeft: () => (
						<Icon.Button
							name="md-menu"
							size={30}
							backgroundColor={Colors.transparent}
							style={{ marginLeft: 12 }}
							onPress={() => navigation.openDrawer()}
							color={Colors.tabColor}
						></Icon.Button>
					),
				
					
				}}
			/>
		</Stack.Navigator>
	);
};

export { TodoStackNavigator, ReportStackNavigator };
