import { View, Text, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import { AppetiteContext } from "../../context/AppetiteContext";
import { historyStyles } from "../../styles";

export const History = () => {
  const { mealHistory, setMealHistory, getMealHistory } = useContext(AppetiteContext);

  useEffect(() => {
    const fetchHistory = async () => setMealHistory(await getMealHistory());
  
    fetchHistory();
  }, []);

  return (
    <View style={historyStyles.container}>
      <Text style={historyStyles.title}>Meal History</Text>

      {mealHistory.length === 0 || mealHistory === null ? (
        <Text style={historyStyles.emptyText}>No history yet.</Text>
      ) : (
        <FlatList
          data={mealHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={historyStyles.historyItem}>
              <Text style={historyStyles.historyText}>{item.level.toUpperCase()}</Text>
              <Text style={historyStyles.timeText}>{item.time}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};
