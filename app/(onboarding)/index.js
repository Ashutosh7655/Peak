import { useRouter } from 'expo-router';
import { StyleSheet, Text, View,Button } from 'react-native';
export default function login() {
  const router = useRouter();
  
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22, marginBottom: 20 }}>login💪</Text>
        <Button title="Go to Home" onPress={() => router.replace("/signup")} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
