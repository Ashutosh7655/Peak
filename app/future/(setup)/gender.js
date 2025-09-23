import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function GenderScreen() {
  const router=useRouter();
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() =>router.back()}
      >
        <Ionicons name="chevron-back" size={20} color="#E2F163" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>What's Your Gender</Text>

      {/* Description */}
      <View style={styles.descriptionBox}>
        <Text style={styles.description}>This helps us customize your plan and provide recommendations that suit you best.
        </Text>
      </View>

      {/* Gender Options */}
      <View style={styles.options}>
        {/* Male */}
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === "male" && styles.selectedMale,
          ]}
          onPress={() => setSelectedGender("male")}
        >
          <FontAwesome5
            name="mars"
            size={50}
            color={selectedGender === "male" ? "#111" : "#fff"}
          />
          <Text
            style={[
              styles.optionText,
              selectedGender === "male" && styles.optionTextSelected,
            ]}
          >
            Male
          </Text>
        </TouchableOpacity>

        {/* Female */}
        <TouchableOpacity
          style={[
            styles.option,
            selectedGender === "female" && styles.selectedFemale,
          ]}
          onPress={() => setSelectedGender("female")}
        >
          <FontAwesome5
            name="venus"
            size={40}
            color={selectedGender === "female" ? "#111" : "#fff"}
          />
          <Text
            style={[
              styles.optionText,
              selectedGender === "female" && styles.optionTextSelected,
            ]}
          >
            Female
          </Text>
        </TouchableOpacity>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn}
      onPress={()=>router.push("./age")}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  backText: {
    color: "#E2F163",
    fontSize: 14,
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
  },
  descriptionBox: {
    backgroundColor: "#A78BFA",
    padding: 15,
    marginTop: 20,
  },
  description: {
    color: "#111",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 18,
  },
  options: {
    marginTop: 40,
    alignItems: "center",
  },
  option: {
    width: 200,
    height: 200,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: "#555",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#222",
  },
  selectedMale: {
    backgroundColor: "#E2F163",
    borderColor: "#E2F163",
  },
  selectedFemale: {
    backgroundColor: "#E2F163",
    borderColor: "#E2F163",
  },
  optionText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  optionTextSelected: {
    color: "#111",
  },
  continueBtn: {
    marginTop: 30,
    marginHorizontal: 40,
    backgroundColor: "#222",
    borderRadius: 25,
    paddingVertical: 14,
  },
  continueText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
