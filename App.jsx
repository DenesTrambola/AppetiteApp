import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, History, Settings } from "./src/views";
import { AppetiteProvider } from "./src/context/AppetiteContext";
import { AppetiteLevel } from "./src/views/appetiteLevel";
import { appStyles } from "./src/styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppetiteProvider>
      <NavigationContainer>
        <SafeAreaView style={appStyles.container}>
          <Stack.Navigator>
            <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="appetiteLevel" component={AppetiteLevel} options={{title: 'Appetite Level'}} />
            <Stack.Screen name="history" component={History} options={{title: 'Appetite History'}} />
            <Stack.Screen name="settings" component={Settings} options={{title: 'Application Settings'}} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </AppetiteProvider>
  );
}
