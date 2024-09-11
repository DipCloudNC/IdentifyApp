// src/screens/HomeScreen.js
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Camera from "../components/Camera";
import UploadButton from "../components/UploadButton";
import { identifyItem } from "../utils/api";
import IdentificationResult from "../components/IdentificationResult";

const HomeScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImagePicked = (uri) => {
    setImage(uri);
    setResult(null);
  };

  const handleIdentify = async () => {
    if (!image) {
      Alert.alert("Error", "Please select an image first.");
      return;
    }

    try {
      const imageBase64 = await fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          return new Promise((resolve) => {
            reader.onloadend = () => resolve(reader.result.split(",")[1]);
          });
        });

      const response = await identifyItem(imageBase64);
      console.log("Identification Response:", response); // Debug logging
      setResult(response);
      navigation.navigate("ResultScreen", { result: response });
    } catch (error) {
      console.error("Identification failed:", error);
      Alert.alert("Error", "Failed to identify the image. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Camera onImagePicked={handleImagePicked} />
      <UploadButton onPress={handleIdentify} />
      {result && <IdentificationResult result={result} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});

export default HomeScreen;
