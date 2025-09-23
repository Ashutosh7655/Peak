import { Stack } from "expo-router";

export default function FirsttimeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#000" }, }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="page1" />
      <Stack.Screen name="page2" />
    </Stack>
  );
}
