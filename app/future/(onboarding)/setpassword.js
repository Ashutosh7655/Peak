import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // for back arrow

export default function SetPasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#E2F163" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Set Password</Text>
      </View>

      {/* Description */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="***********"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="***********"
          placeholderTextColor="#999"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Reset Button */}
      <TouchableOpacity style={styles.resetBtn}>
        <Text style={styles.resetText}>Reset Password</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    padding: 15,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#E2F163",
    marginRight: 24, // balance back arrow
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  description: {
    textAlign: "center",
    color: "#ccc",
    fontSize: 13,
    lineHeight: 18,
  },
  inputSection: {
    backgroundColor: "#A78BFA",
    padding: 20,
    marginTop: 30,
  },
  label: {
    color: "#111",
    fontWeight: "700",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
  },
  resetBtn: {
    marginTop: 40,
    marginHorizontal: 40,
    backgroundColor: "#222",
    borderRadius: 25,
    paddingVertical: 14,
  },
  resetText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
