import { Stack } from "expo-router";
import { useEffect } from "react";
import { Image } from "react-native";

export default function RootLayout() {
  
  return (
    
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(first-time)" />
      <Stack.Screen name="(onboarding)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
