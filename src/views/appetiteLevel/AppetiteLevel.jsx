import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AppetiteContext } from "../../context/AppetiteContext";
import { appetiteLevelStyles } from "../../styles";

export const AppetiteLevel = () => {
  const { hungerLevel, updateHungerLevel } = useContext(AppetiteContext);
  
  const hungerEmojis = {
    hungry: "🍽️",
    neutral: "😐",
    full: "🍕",
  };

  return (
    <View style={appetiteLevelStyles.container}>
      <Text style={appetiteLevelStyles.title}>Current Hunger Level</Text>
      <Text style={appetiteLevelStyles.emoji}>{hungerEmojis[hungerLevel]}</Text>
      <Text style={appetiteLevelStyles.hungerText}>{hungerLevel.toUpperCase()}</Text>

      <TouchableOpacity style={appetiteLevelStyles.button} onPress={() => updateHungerLevel("hungry")}>
        <Text style={appetiteLevelStyles.buttonText}>I'm Hungry</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appetiteLevelStyles.button} onPress={() => updateHungerLevel("full")}>
        <Text style={appetiteLevelStyles.buttonText}>I'm Full</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appetiteLevelStyles.button} onPress={() => updateHungerLevel("neutral")}>
        <Text style={appetiteLevelStyles.buttonText}>Neutral</Text>
      </TouchableOpacity>
    </View>
  );
};
