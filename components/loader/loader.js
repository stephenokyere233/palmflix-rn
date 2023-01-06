import React from "react";
import { View, StyleSheet } from "react-native";

const LoadingSpinner = () => {
  return (
    <View className="flex items-center justify-center flex-1">
      <View style={styles.spinner} className="animate-spin"></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    width: 60,
    height: 60,
    borderWidth: 4,
    borderColor: "#ccc",
    borderRadius: 50,
    borderTopColor: "blueviolet",
    animationDuration: "1s",
    animationIterationCount: "infinite",
  },
});

export default LoadingSpinner;
