import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Page2Screen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:"#000" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>page2 💪</Text>
      <Button title="Go to Home" onPress={() => router.replace("/(onboarding)/")} />
    </View>
  );
}
