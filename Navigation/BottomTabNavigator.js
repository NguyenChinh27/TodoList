import React, { ReactElement } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Colors from "../Constants/Colors";
import { TodoStackNavigator, ReportStackNavigator } from "./StackNavigator";
import { AntDesign } from "@expo/vector-icons";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName="Todo"
			activeColor="white"
			inactiveColor={Colors.gray}
			shifting={true}

		>
			<Tab.Screen
				name="Todo"
				options={{
					tabBarColor: Colors.primary,
					tabBarIcon: ({ color }) => (
						<AntDesign name="plussquare" size={24} color={color} />
					),
				}}
				component={TodoStackNavigator}
			/>
		
			<Tab.Screen
				name="Report"
				options={{
					tabBarColor: Colors.tabColor,
					tabBarIcon: ({ color }) => (
						<AntDesign name="carryout" size={24} color={color} />
					),
				}}
				children={ReportStackNavigator}
			/>
		</Tab.Navigator>
	);
};

export default BottomTabNavigator;
