import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function GoalScreen() {
  const router = useRouter();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    "Lose Weight",
    "Gain Weight",
    "Muscle Mass Gain",
    "Shape Body",
    "Others",
  ];

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>◀ Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>What’s Your Goal?</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      {/* Goal Options */}
      <View style={styles.optionsWrapper}>
        {goals.map((goal, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedGoal === goal && styles.activeOption,
            ]}
            onPress={() => setSelectedGoal(goal)}
          >
            <Text style={styles.optionText}>{goal}</Text>
            <View style={styles.radioOuter}>
              {selectedGoal === goal && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.continueBtn}
        onPress={() => router.push("/next")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
    padding: 20,
  },
  back: {
    color: "#E2F163",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    backgroundColor: "#A78BFA",
    borderRadius: 6,
    padding: 10,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
  },
  optionsWrapper: {
    marginBottom: 30,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#A78BFA",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  activeOption: {
    backgroundColor: "#E2F163",
  },
  optionText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#000",
  },
  continueBtn: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 25,
    marginTop: "auto",
    alignItems: "center",
  },
  continueText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
