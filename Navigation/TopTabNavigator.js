import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabAll from "../Components/TabAll"
import TabDone from "../Components/TabDone"
import TabUnDone from "../Components/TabUnDone"

const TopTab = createMaterialTopTabNavigator();
export default function TopTabNavigator() {
    return (     
        <TopTab.Navigator>
        <TopTab.Screen name="All" component={TabAll}  options={{ title: 'ALL'}}/>
        <TopTab.Screen name="Done" component={TabDone}  options={{ title: 'DONE'}} />
        <TopTab.Screen name="UnDone" component={TabUnDone}  options={{ title: 'UNDONE'}}/>
      </TopTab.Navigator>
    )
}
