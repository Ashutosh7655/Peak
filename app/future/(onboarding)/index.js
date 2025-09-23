import { useRouter } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Svg, { Path } from "react-native-svg";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Header title at top */}
      <Text style={styles.title}>Login</Text>

      {/* Welcome + message */}
      <View style={styles.headerTextContainer}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.subText}>Enter your email and password</Text>
      </View>

    <View style={{backgroundColor:"#B3A0FF",width:800,height:300}}>
    {/* Inputs + Forgot password */}
      <View style={styles.inputContainer}>
        <Text>Username or email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />
        <View style={{ width: "100%" }}>
          <TextInput
            style={styles.input}
            placeholder="*************"
            placeholderTextColor="#aaa"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Pressable
        style={{alignItems:"flex-end"}}
            onPress={() => console.log("Forgot password pressed")}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>
      </View>
    </View>
      

      {/* Login button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#555" : "#333" },
        ]}
        onPress={() => router.replace("./signup")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      

      {/* Google sign in (image button) */}
      <Pressable onPress={() => console.log("Google login pressed")}>
        <Text style={{color:"#FFF",textAlign:"center"}}>Or Sign in With</Text>
        <View style={{alignItems:"center"}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="-3 0 262 262"
          preserveAspectRatio="xMidYMid"
        >
          <Path
            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            fill="#4285F4"
          />
          <Path
            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            fill="#34A853"
          />
          <Path
            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            fill="#FBBC05"
          />
          <Path
            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            fill="#EB4335"
          />
        </Svg>
        </View>
      </Pressable>
      {/* Signup link */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account? </Text>
        <Pressable onPress={() => console.log("Go to signup")}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // dark background
    justifyContent: "flex-start", // 👈 content starts from top
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#E2F163", // 👈 login title color
  },
  headerTextContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  welcome: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
  },
  subText: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 5,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#1E1E1E",
    color: "#fff",
    marginBottom: 10,
  },
  
  forgotText: {
    color: "#E2F163",
    fontSize: 14,
  },
  button: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#E2F163", // 👈 login button text
    fontSize: 16,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  signupText: {
    fontSize: 14,
    color: "#aaa",
  },
  signupLink: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E2F163", // 👈 signup link color
  },
  googleImage: {
    width: 40,
    height: 40,
    marginTop: 10,
  },
});
