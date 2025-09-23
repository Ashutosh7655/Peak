import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function setup() {
  const router=useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require("../../assets/6.png")} 
        style={styles.image}
      >
      </ImageBackground>
      <View style={{flexDirection:"column"}}>
      {/* Motivation Section */}
      <View style={styles.motivation}>
        <Text style={styles.motivationText}>
          Consistency Is{"\n"}The Key To Progress.{"\n"}Don't Give Up!
        </Text>
      </View>

      {/* Description Section */}
      <View style={styles.descriptionSection}>
        <Text style={styles.description}>
          Let’s personalize your experience.{"\n"} We’ll need some basic information
        about you to get started.  </Text>
      </View>

      <TouchableOpacity style={styles.nextBtn}
      onPress={()=>router.push("./fillprofile")}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  image: {
    flex: 0.9,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  
  motivation: {
    backgroundColor: "#111",
    padding: 20,
    alignItems: "center",
  },
  motivationText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#E2F163",
    textAlign: "center",
  },
  descriptionSection: {
    backgroundColor: "#A78BFA",
    padding: 20,
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    color: "#111",
    fontSize: 16,
    lineHeight: 18,
  },
  nextBtn: {
    marginTop: 30,
    marginHorizontal: 40,
    backgroundColor: "#222",
    borderRadius: 25,
    paddingVertical: 14,
  
  },
  nextText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
