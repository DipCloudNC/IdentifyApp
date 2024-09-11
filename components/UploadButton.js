import React from "react";
import { Button, View, StyleSheet } from "react-native";

const UploadButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Upload and Identify" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default UploadButton;
