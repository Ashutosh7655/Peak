import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function WeightScreen() {
  const router = useRouter();
  const [unit, setUnit] = useState("KG");
  const [weight, setWeight] = useState(75);

  // Generate weights for scroll view
  const weights = Array.from({ length: 200 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>◀ Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>What Is Your Weight?</Text>

      {/* Subtitle */}
      <View style={styles.subtitleBox}>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Unit Switch */}
      <View style={styles.switchContainer}>
        <TouchableOpacity
          style={[styles.switchBtn, unit === "KG" && styles.activeSwitch]}
          onPress={() => setUnit("KG")}
        >
          <Text style={styles.switchText}>KG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.switchBtn, unit === "LB" && styles.activeSwitch]}
          onPress={() => setUnit("LB")}
        >
          <Text style={styles.switchText}>LB</Text>
        </TouchableOpacity>
      </View>

      {/* Weight Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {weights.map((w) => (
          <TouchableOpacity key={w} onPress={() => setWeight(w)}>
            <Text style={[styles.weightNumber, w === weight && styles.activeWeight]}>
              {w}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Selected Weight */}
      <Text style={styles.selectedWeight}>
        {weight} {unit}
      </Text>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn} onPress={() => router.push("./fillprofile")}>
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
  subtitleBox: {
    backgroundColor: "#A78BFA",
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  switchBtn: {
    flex: 1,
    padding: 15,
    backgroundColor: "#333",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeSwitch: {
    backgroundColor: "#E2F163",
  },
  switchText: {
    fontWeight: "bold",
    color: "#000",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  weightNumber: {
    fontSize: 20,
    color: "#777",
    marginHorizontal: 10,
  },
  activeWeight: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  selectedWeight: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
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
