import { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  SafeAreaViewBase,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = 60; // each item's full width (adjust if you want bigger spacing)
const SIDE_PADDING = (SCREEN_WIDTH - ITEM_WIDTH) / 2;
const ages = Array.from({ length: 83 }, (_, i) => i + 18); // 18–100

export default function AgeScreen() {
  const router = useRouter();
  const [age, setAge] = useState(18);
  const scrollRef = useRef(null);

  // center the initial age on mount
  useEffect(() => {
    const index = ages.indexOf(age);
    if (index !== -1 && scrollRef.current) {
      // scrollX = index * ITEM_WIDTH (since we use SIDE_PADDING)
      const x = index * ITEM_WIDTH;
      scrollRef.current.scrollTo({ x, animated: false });
    }
  }, [scrollRef]);

  // called when user taps an age
  const handleSelectAge = (a, index) => {
    setAge(a);
    const x = index * ITEM_WIDTH;
    scrollRef.current?.scrollTo({ x, animated: true });
  };

  // called when user finishes swiping — snap to nearest and update state
  const handleMomentumEnd = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const index = Math.round(x / ITEM_WIDTH);
    const clampedIndex = Math.max(0, Math.min(ages.length - 1, index));
    const newAge = ages[clampedIndex];
    // ensure we snap exactly
    scrollRef.current?.scrollTo({ x: clampedIndex * ITEM_WIDTH, animated: true });
    setAge(newAge);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>◀ Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>How Old Are You?</Text>

      {/* Subtitle */}
      <View style={styles.subtitleBox}>
        <Text style={styles.subtitle}>
          This helps us customize your plan and provide recommendations that suit you best.
        </Text>
      </View>

      {/* Selected Age (big) */}
      <Text style={styles.selectedAge}>{age}</Text>

      {/* Arrow indicator above the scroller */}
      <Text style={styles.arrow}>▲</Text>

      {/* Age Selector */}
      <View style={styles.selectorWrapper}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[styles.scrollContainer, { paddingHorizontal: SIDE_PADDING }]}
          snapToInterval={ITEM_WIDTH}
          decelerationRate="fast"
          onMomentumScrollEnd={handleMomentumEnd}
        >
          {ages.map((a, index) => (
            <TouchableOpacity key={a} onPress={() => handleSelectAge(a, index)}>
              <View style={styles.ageWrapper}>
                <Text style={[styles.ageNumber, a === age && styles.activeAge]}>{a}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Center vertical line to show the selection position */}
        <View style={styles.centerLine} />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn} onPress={() => router.push("./height")}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitleBox: {
    backgroundColor: "#A78BFA",
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  selectedAge: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginBottom: 6,
    // for visual parity with the scroller item, give same width and center
    width: ITEM_WIDTH,
    alignSelf: "center",
  },
  arrow: {
    color: "#E2F163",
    textAlign: "center",
    fontSize: 18,
    marginBottom: 8,
    alignSelf: "center",
  },
  selectorWrapper: {
    backgroundColor: "#A78BFA",
    borderRadius: 8,
    paddingVertical: 12,
    position: "relative",
    // keep some bottom padding so numbers aren't clipped
    paddingBottom: 18,
  },
  scrollContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ageWrapper: {
    width: ITEM_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  ageNumber: {
    textAlign: "center",
    fontSize: 20,
    color: "#aaa",
  },
  activeAge: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  centerLine: {
    position: "absolute",
    top: 6,
    bottom: 6,
    left: "50%",
    width: 2,
    marginLeft: -1,
    backgroundColor: "#fff",
    borderRadius: 1,
  },
  continueBtn: {
    backgroundColor: "#333",
    padding: 15,
    marginBottom:35,
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
