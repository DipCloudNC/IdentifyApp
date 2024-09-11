import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ResultScreen = ({ route }) => {
  const { result } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Type: {result.type}</Text>
      {result.breeds.map((breed, index) => (
        <View key={index} style={styles.breedContainer}>
          <Text style={styles.breedName}>{breed.name}</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Scientific Name:</Text>
              <Text style={styles.cellValue}>{breed.scientificName}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Description:</Text>
              <Text style={styles.cellValue}>{breed.description}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Origin:</Text>
              <Text style={styles.cellValue}>{breed.origin}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Life Span:</Text>
              <Text style={styles.cellValue}>{breed.lifeSpan}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.cellLabel}>Personality:</Text>
              <Text style={styles.cellValue}>{breed.personality}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f0f0", // A light gray background color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Dark text color for better contrast
  },
  breedContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "#fff", // White background for card
    width: "100%",
    shadowColor: "#000", // Black shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow blur
    elevation: 3, // Android shadow
  },
  breedName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#222", // Slightly lighter dark text color
  },
  table: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    paddingVertical: 8,
  },
  cellLabel: {
    fontSize: 16,
    fontWeight: "600",
    flex: 2,
    color: "#555",
  },
  cellValue: {
    fontSize: 16,
    flex: 3,
    color: "#777",
  },
});

export default ResultScreen;
