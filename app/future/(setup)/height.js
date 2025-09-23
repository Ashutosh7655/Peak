import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

export default function HeightScreen() {
  const router = useRouter();
  const [selectedHeight, setSelectedHeight] = useState(165);

  // Generate height values (e.g., 120cm to 220cm)
  const heights = Array.from({ length: 101 }, (_, i) => i + 120);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>◀ Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>What Is Your Height?</Text>

      {/* Subtitle */}
      <View style={styles.subtitleBox}>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Selected Height */}
      <Text style={styles.selectedHeight}>{selectedHeight} <Text style={{fontSize:18}}>Cm</Text></Text>

      {/* Vertical Ruler Selector */}
      <View style={styles.rulerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          snapToInterval={50} // each item height
          decelerationRate="fast"
          contentContainerStyle={{ paddingVertical: height * 0.25 }}
          onScroll={(event) => {
            const y = event.nativeEvent.contentOffset.y;
            const index = Math.round(y / 50);
            if (heights[index]) setSelectedHeight(heights[index]);
          }}
          scrollEventThrottle={16}
        >
          {heights.map((h) => (
            <View key={h} style={styles.tickWrapper}>
              <Text style={[styles.tickLabel, h === selectedHeight && styles.activeTick]}>{h}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Purple ruler */}
        <View style={styles.rulerOverlay}>
          <View style={styles.centerLine} />
          <Text style={styles.pointer}>▶</Text>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn} onPress={() => router.push("/next")}>
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
  selectedHeight: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  rulerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  tickWrapper: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tickLabel: {
    fontSize: 18,
    color: "#666",
  },
  activeTick: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  rulerOverlay: {
    position: "absolute",
    height: "100%",
    width: 100,
    backgroundColor: "#A78BFA",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  centerLine: {
    position: "absolute",
    width: "80%",
    height: 2,
    backgroundColor: "#E2F163",
  },
  pointer: {
    position: "absolute",
    right: -20,
    color: "#E2F163",
    fontSize: 18,
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
