import React, { useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Navigation/DrawerNavigator";
import { AppLoading } from "expo";
// import RealtimeDB from './Data/RealtimeDB'
// import WelCome from "./Welcome"

const getFont = () =>
	Font.loadAsync({
		anticon: require("./assets/font/anticon.ttf"),
		domestic_manners: require("./assets/font/Domestic_Manners.ttf"),
		KGYouWontBringMeDown: require("./assets/font/KGYouWontBringMeDown.ttf"),
	});

function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);
	console.disableYellowBox = true;
	if (fontsLoaded) {
		return (
			
			<NavigationContainer>
				<DrawerNavigator />
			</NavigationContainer>
		);
	} else {
		return (
			<AppLoading
				startAsync={getFont}
				onFinish={() => setFontsLoaded(true)}
			/>
		);
	}
}

export default App;
