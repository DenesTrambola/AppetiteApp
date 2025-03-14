import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AppetiteContext = createContext();

export const AppetiteProvider = ({ children }) => {
  const [hungerLevel, setHungerLevel] = useState("neutral");
  const [mealHistory, setMealHistory] = useState([]);

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
    <AppetiteContext.Provider value={{ hungerLevel, updateHungerLevel, mealHistory, setMealHistory, getMealHistory }}>
      {children}
    </AppetiteContext.Provider>
  );
};
