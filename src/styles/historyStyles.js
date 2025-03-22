import { StyleSheet } from "react-native";

export const historyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  lightBg: {
    backgroundColor: "#E3F2FD",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  emptyText: {
    fontSize: 18,
    color: "#555",
  },
  historyItem: {
    backgroundColor: "#BBDEFB",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  historyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 14,
    color: "#444",
  },
});
