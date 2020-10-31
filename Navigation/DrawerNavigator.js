
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ReportStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import DrawerContent from "../Components/DrawerContent"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
