import { View, Text, TouchableOpacity } from "react-native";
import {gotoView} from '../../utils'
import { homeStyles, themesStyles } from "../../styles";
import { useContext } from "react";
import { AppetiteContext } from "../../context/AppetiteContext";

export const Home = ({ navigation }) => {
  const { theme } = useContext(AppetiteContext);
  return (
    <View style={[homeStyles.container, theme === "dark" ? themesStyles.darkBg : homeStyles.lightBg]}>
      <Text style={[homeStyles.title, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Appetite Tracker</Text>

      <TouchableOpacity style={homeStyles.button} onPress={() => gotoView("appetiteLevel", navigation)}>
        <Text style={[homeStyles.buttonText, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Appetite Level</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.button} onPress={() => gotoView("history", navigation)}>
        <Text style={[homeStyles.buttonText, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Appetite History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.button} onPress={() => gotoView("settings", navigation)}>
        <Text style={[homeStyles.buttonText, theme === "dark" ? themesStyles.lightFg : themesStyles.darkFg]}>Application Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
