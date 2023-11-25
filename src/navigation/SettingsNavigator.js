import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import EditDeviceScreen from "../screens/EditDeviceScreen";
import SearchDeviceScreen from "../screens/SearchDeviceScreen";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

function CustomHeaderTitle({ title }) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <AppText style={{ fontSize: 26, fontWeight: "bold" }}>{title}</AppText>
    </View>
  );
}

const SettingsNavigator = () => (
  <Stack.Navigator
    screenOptions={({ navigation, route }) => ({
      headerTitleStyle: {
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: colors.light,
      },
      headerBackTitle: "Back",

      headerTitle: () => <CustomHeaderTitle title={route.name} />,
    })}
  >
    <Stack.Screen name="Settings" component={ProfileScreen} />
    <Stack.Screen name="Edit Device" component={EditDeviceScreen} />
    <Stack.Screen name="Search" component={SearchDeviceScreen} />
  </Stack.Navigator>
);

export default SettingsNavigator;
