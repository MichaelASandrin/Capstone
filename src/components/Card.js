import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Card({ title, icon }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [lights, setLights] = useState(
    isEnabled ? colors.primary : colors.black
  );

  useEffect(() => {
    setLights(isEnabled ? colors.primary : colors.black);
  }, [isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };

  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <MaterialCommunityIcons name={icon} size={50} color={lights} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.toggleContainer}>
        <Switch value={isEnabled} onValueChange={toggleSwitch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.light,
    marginBottom: 20,
    height: 250,
    width: "40%",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  contentContainer: {
    alignItems: "center", // Center the icon and title
    justifyContent: "center", // Center the icon and title
    padding: 15,
    flex: 5,
  },
  title: {
    color: colors.black, // Title color
    marginVertical: 20, // Space between icon and title
  },
  toggleContainer: {
    padding: 10,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
});

export default Card;
