import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

export const AppetiteContext = createContext();

export const AppetiteProvider = ({ children }) => {
  const [hungerLevel, setHungerLevel] = useState("neutral");
  const [mealHistory, setMealHistory] = useState([]);
  const [theme, setTheme] = useState(Appearance.getColorScheme() || "light");

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem("appTheme");
      if (storedTheme) setTheme(storedTheme);
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await AsyncStorage.setItem("appTheme", newTheme);
  };

  const clearMealHistory = async () => {
    await AsyncStorage.removeItem("appetiteRecords");
    setMealHistory([]);
  };

  const updateHungerLevel = (level) => {
    const newRecord = {
      id: Date.now(),
      time: new Date().toLocaleTimeString(),
      level: hungerLevel,
    };

    setHungerLevel(level);
    setMealHistory((prev) => [...prev, newRecord]);
    saveAppetiteLevel(newRecord);
  };

  const getMealHistory = async () => {
      const existingRecords = await AsyncStorage.getItem('appetiteRecords');
      return existingRecords ? JSON.parse(existingRecords) : [];
  }

  const saveAppetiteLevel = async (newRecord) => {
      try {
          const existingRecords = await AsyncStorage.getItem('appetiteRecords');
          const records = existingRecords ? JSON.parse(existingRecords) : [];
  
          records.push(newRecord);
  
          await AsyncStorage.setItem('appetiteRecords', JSON.stringify(records));
      } catch (error) {
          console.error("Error saving data:", error);
      }
  };

  return (
    <AppetiteContext.Provider value={{
      hungerLevel, updateHungerLevel,
      mealHistory, setMealHistory, getMealHistory,
      theme, toggleTheme, clearMealHistory  }}>
      {children}
    </AppetiteContext.Provider>
  );
};
