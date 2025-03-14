import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {gotoView} from '../../utils'
import { homeStyles } from "../../styles";

export const Home = ({ navigation }) => {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Appetite Tracker</Text>

      <TouchableOpacity style={homeStyles.button} onPress={() => gotoView("appetiteLevel", navigation)}>
        <Text style={homeStyles.buttonText}>Appetite Level</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.button} onPress={() => gotoView("history", navigation)}>
        <Text style={homeStyles.buttonText}>Appetite History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={homeStyles.button} onPress={() => gotoView("settings", navigation)}>
        <Text style={homeStyles.buttonText}>Application Settings</Text>
      </TouchableOpacity>
    </View>
  );
};
