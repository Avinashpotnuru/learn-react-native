import { createDrawerNavigator } from "@react-navigation/drawer";

import Health from "./screens/health";
import Home from "./screens/home";
import Science from "./screens/science";
import Sports from "./screens/sports";
import TodoList from "./screens/todoList";

export type DrawerParamList = {
  Home: undefined;
  About: undefined;
  TodoList: undefined;
  General: undefined;
  Entertainment: undefined;
  Health: undefined;
  Science: undefined;
  sports: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const screens = [
  { name: "Home", component: Home, category: "general" },
  { name: "Health", component: Health, category: "health" },
  { name: "Entertainment", component: Home, category: "entertainment" },
  { name: "Science", component: Science, category: "science" },
  { name: "Sports", component: Sports, category: "sports" },
];

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,

        drawerActiveBackgroundColor: "#f0c000",
        drawerActiveTintColor: "white",
        drawerLabelStyle: {
          fontWeight: "bold",
        },
        drawerStatusBarAnimation: "fade",
        drawerStyle: { backgroundColor: "#b9f9afe1" },
        drawerContentStyle: { backgroundColor: "#b9f9afe1" },
        headerStyle: { backgroundColor: "#b9f9afe1" },
        headerShadowVisible: false,
      }}
    >
      {screens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name as keyof DrawerParamList}
          component={screen.component}
          initialParams={{ category: screen.category } as any}
        />
      ))}
      <Drawer.Screen name="TodoList" component={TodoList} />
    </Drawer.Navigator>
  );
}
