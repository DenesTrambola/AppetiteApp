import React, { useContext } from "react";
import { View, Text, Switch, Button } from "react-native";
import { AppetiteContext } from "../../context/AppetiteContext";
import { settingsStyles, themesStyles } from "../../styles";

export const Settings = () => {
  const { theme, toggleTheme, clearMealHistory } = useContext(AppetiteContext);

  return (
    <View style={[settingsStyles.container, theme === "dark" ? themesStyles.darkBg : themesStyles.lightBg]}>
      <Text style={[settingsStyles.title, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Settings</Text>

      <View style={[settingsStyles.option, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>
        <Text style={[settingsStyles.text, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Dark Mode</Text>
        <Switch value={theme === "dark"} onValueChange={toggleTheme} />
      </View>

      <Button title="Clear Meal History" onPress={clearMealHistory} color="red" />

      <View style={settingsStyles.info}>
        <Text style={[settingsStyles.text, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Version: 1.0.0</Text>
        <Text style={[settingsStyles.text, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Developed by Dénes Trambola</Text>
      </View>
    </View>
  );
};
