import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, History, Settings, AppetiteLevel } from "../../views";
import { appStyles, themesStyles } from "../../styles";
import { useContext } from "react";
import { AppetiteContext } from "../../context/AppetiteContext";

const Stack = createStackNavigator();

export const Main = () => {
  const { theme } = useContext(AppetiteContext);
  return (
    <NavigationContainer>
        <SafeAreaView style={[appStyles.container, theme === "dark" ? themesStyles.darkBg : themesStyles.lightBg]}>
          <Stack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: theme == 'dark' ? "#222" : "#fff",
            },
            headerTintColor: theme == 'dark' ? "#fff" : "#222",
         }}>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="appetiteLevel" component={AppetiteLevel} options={{title: 'Appetite Level'}} />
            <Stack.Screen name="history" component={History} options={{title: 'Appetite History'}} />
            <Stack.Screen name="settings" component={Settings} options={{title: 'Application Settings'}} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
  );
}
