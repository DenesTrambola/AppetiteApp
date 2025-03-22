import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AppetiteContext } from "../../context/AppetiteContext";
import { appetiteLevelStyles, themesStyles } from "../../styles";

export const AppetiteLevel = () => {
  const { hungerLevel, updateHungerLevel, theme } = useContext(AppetiteContext);
  
  const hungerEmojis = {
    hungry: "🍽️",
    neutral: "😐",
    full: "🍕",
  };

  return (
    <View style={[appetiteLevelStyles.container, theme === "dark" ? themesStyles.darkBg : appetiteLevelStyles.lightBg]}>
      <Text style={[appetiteLevelStyles.title, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Current Hunger Level</Text>
      <Text style={appetiteLevelStyles.emoji}>{hungerEmojis[hungerLevel]}</Text>
      <Text style={[appetiteLevelStyles.hungerText, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>{hungerLevel.toUpperCase()}</Text>

      <TouchableOpacity style={appetiteLevelStyles.button} onPress={() => updateHungerLevel("hungry")}>
        <Text style={[appetiteLevelStyles.buttonText, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>I'm Hungry</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appetiteLevelStyles.button} onPress={() => updateHungerLevel("full")}>
        <Text style={[appetiteLevelStyles.buttonText, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>I'm Full</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appetiteLevelStyles.button} onPress={() => updateHungerLevel("neutral")}>
        <Text style={[appetiteLevelStyles.buttonText, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Neutral</Text>
      </TouchableOpacity>
    </View>
  );
};
