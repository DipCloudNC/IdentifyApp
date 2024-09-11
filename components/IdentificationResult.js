// src/components/IdentificationResult.js
import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const IdentificationResult = ({ result }) => {
  // Prepare data for FlatList
  const data = [
    { key: "Type", value: result.type },
    { key: "Breed", value: result.breeds[0].name },
    { key: "Description", value: result.breeds[0].description },
    { key: "Origin", value: result.breeds[0].origin },
    { key: "Lifespan", value: result.breeds[0].lifeSpan },
    { key: "Personality", value: result.breeds[0].personality },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.key}>{item.key}:</Text>
      <Text style={styles.value}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {result ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
        />
      ) : (
        <Text style={styles.text}>No result to show</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  key: {
    fontWeight: "bold",
    marginRight: 10,
  },
  value: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  },
});

export default IdentificationResult;
