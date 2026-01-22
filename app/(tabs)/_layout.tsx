import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === "home") icon = "home";
          if (route.name === "about") icon = "person";
          if (route.name === "todoList") icon = "list";

          return <Ionicons name={icon as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
      <Tabs.Screen name="todoList" options={{ title: "Todo List" }} />
    </Tabs>
  );
}
