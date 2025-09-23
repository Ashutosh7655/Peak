import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // hide default headers
        animation: "slide_from_right", // smooth screen transition
        contentStyle: {
          backgroundColor: "#111111", // dark theme background
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="age" />
      <Stack.Screen name="gender" />
      <Stack.Screen name="height" />
      <Stack.Screen name="weight" />
      <Stack.Screen name="goal" />
      <Stack.Screen name="fillprofile" />
    </Stack>
  );
}
