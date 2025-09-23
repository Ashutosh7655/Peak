import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For back arrow
import { FontAwesome } from "@expo/vector-icons"; // For Facebook
import { AntDesign } from "@expo/vector-icons"; // For Google
import { MaterialIcons } from "@expo/vector-icons"; // For fingerprint
import { SafeAreaView } from "react-native-safe-area-context";

export default function signup({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#E2F163" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Account</Text>
      </View>

      <Text style={styles.subtitle}>Let's Start!</Text>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#999"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Email or Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="+123 567 89000"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={emailOrMobile}
          onChangeText={setEmailOrMobile}
        />

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

      {/* Terms */}
      <Text style={styles.terms}>
        By continuing, you agree to{" "}
        <Text style={styles.link}>Terms of Use</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or sign up with</Text>

      {/* Social Icons */}
      <View style={styles.socialRow}>
        <AntDesign name="google" size={28} color="#fff" style={styles.socialIcon} />
        <FontAwesome name="facebook" size={28} color="#fff" style={styles.socialIcon} />
        <MaterialIcons name="fingerprint" size={32} color="#fff" style={styles.socialIcon} />
      </View>

      {/* Login Redirect */}
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={styles.loginLink}>Log in</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A78BFA", // purple background
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
    marginRight: 24, // to balance back button
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    marginVertical: 15,
    color: "#fff",
  },
  form: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
  },
  terms: {
    textAlign: "center",
    color: "#ddd",
    fontSize: 12,
    marginHorizontal: 30,
    marginTop: 20,
  },
  link: {
    color: "#E2F163",
  },
  signUpBtn: {
    marginTop: 20,
    marginHorizontal: 40,
    backgroundColor: "#111",
    borderRadius: 25,
    paddingVertical: 14,
  },
  signUpText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  orText: {
    textAlign: "center",
    marginVertical: 15,
    color: "#fff",
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  socialIcon: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  loginText: {
    textAlign: "center",
    marginTop: 20,
    color: "#fff",
  },
  loginLink: {
    color: "#E2F163",
    fontWeight: "600",
  },
});
