import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

import AnalyticsScreen from "../screens/AnalyticsScreen";
import DashboardScreen from "../screens/DashboardScreen";
import SearchDeviceScreen from "../screens/SearchDeviceScreen";
import EditDeviceScreen from "../screens/EditDeviceScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RoutinesScreen from "../screens/RoutinesScreen";
import colors from "../config/colors";
import DashboardNavigator from "./DashboardNavigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ navigation, route }) => ({
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.black,
      headerTitleStyle: {
        fontSize: 28,
        paddingHorizontal: 20,
      },
      headerStyle: {
        backgroundColor: colors.light,
      },
      tabBarStyle: {
        backgroundColor: colors.light,
      },

      headerTitleAlign: "left",
      headerRight: () =>
        route.name === "Home" || route.name === "Routines" ? (
          <View style={{ marginRight: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <MaterialCommunityIcons name="plus" size={30} color="black" />
            </TouchableOpacity>
          </View>
        ) : null,
    })}
  >
    <Tab.Screen
      name="Home"
      component={DashboardNavigator}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" size={30} color={color} />
        ),
        headerTitle: "Your Dashboard",
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="Analytics"
      component={AnalyticsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="chart-bar" size={25} color={color} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="Routines"
      component={RoutinesScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="clock" size={25} color={color} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="Settings"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="cog" size={25} color={color} />
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
