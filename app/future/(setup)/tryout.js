import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function FillProfile({ navigation }) {
  const [profile, setProfile] = useState({
    fullName: "",
    nickname: "",
    email: "",
    mobile: "",
    dob: "",
    height: "",
    weight: "",
    image: null,
  });

  // pick profile image
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfile({ ...profile, image: result.assets[0].uri });
    }
  };

  // save to AsyncStorage
  const saveProfile = async () => {
    if (!profile.fullName || !profile.email) {
      Alert.alert("Error", "Please fill in required fields.");
      return;
    }

    try {
      await AsyncStorage.setItem("userProfile", JSON.stringify(profile));
      Alert.alert("Success", "Profile saved!");

      // Navigate to Dashboard
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not save profile.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fill Your Profile</Text>
      <Text style={styles.subtitle}>
        Complete your details so we can personalize your experience.
      </Text>

      {/* Profile Image */}
      <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
        {profile.image ? (
          <Image source={{ uri: profile.image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePlaceholder}>Upload</Text>
        )}
      </TouchableOpacity>

      {/* Form Fields */}
      <View style={styles.form}>
        
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={profile.fullName}
          onChangeText={(t) => setProfile({ ...profile, fullName: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Nickname"
          value={profile.nickname}
          onChangeText={(t) => setProfile({ ...profile, nickname: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={profile.email}
          onChangeText={(t) => setProfile({ ...profile, email: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={profile.mobile}
          onChangeText={(t) => setProfile({ ...profile, mobile: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth (YYYY-MM-DD)"
          value={profile.dob}
          onChangeText={(t) => setProfile({ ...profile, dob: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Height (cm)"
          keyboardType="numeric"
          value={profile.height}
          onChangeText={(t) => setProfile({ ...profile, height: t })}
        />
        <TextInput
          style={styles.input}
          placeholder="Weight (kg)"
          keyboardType="numeric"
          value={profile.weight}
          onChangeText={(t) => setProfile({ ...profile, weight: t })}
        />
      </View>

      {/* Start Button */}
      <TouchableOpacity style={styles.startBtn} onPress={saveProfile}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginTop: 10,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
  },
  imageContainer: {
    marginVertical: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: { width: "100%", height: "100%" },
  imagePlaceholder: { color: "#ccc", fontSize: 14 },
  form: { width: "100%" },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  startBtn: {
    backgroundColor: "#caff3d",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: "60%",
    alignItems: "center",
  },
  startText: { fontWeight: "700", fontSize: 16, color: "#000" },
});
