import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "@/components/custom-drawer";
import { Ionicons } from "@expo/vector-icons";
import Health from "./screens/health";
import Home from "./screens/home";
import Science from "./screens/science";
import Sports from "./screens/sports";
import Technology from "./screens/technology";
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
const COLORS = {
  bg: "#3d3f40",
  active: "#9cf5db",
  inactive: "#0cf0e1",
  headerBg: "#d1fae5",
  activeBg: "#222423",
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const screens = [
  {
    name: "General",
    component: Home,
    category: "general",
    icon: "newspaper-outline",
  },
  {
    name: "Health",
    component: Health,
    category: "health",
    icon: "heart-outline",
  },
  {
    name: "Entertainment",
    component: Home,
    category: "entertainment",
    icon: "film-outline",
  },
  {
    name: "Science",
    component: Science,
    category: "science",
    icon: "flask-outline",
  },
  {
    name: "Sports",
    component: Sports,
    category: "sports",
    icon: "football-outline",
  },
  {
    name: "Technology",
    component: Technology,
    category: "technology",
    icon: "laptop-outline",
  },
  {
    name: "Business",
    component: Technology,
    category: "business",
    icon: "briefcase-outline",
  },
];

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
        drawerType: "front",
        drawerStyle: {
          backgroundColor: COLORS.bg,
          width: 260,
          borderRadius: 0,
          elevation: 0,
        },
        drawerContentStyle: {
          paddingTop: 0,
          paddingHorizontal: 0,
        },
        drawerActiveTintColor: COLORS.active,
        drawerInactiveTintColor: COLORS.inactive,
        drawerActiveBackgroundColor: COLORS.activeBg,
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
          
        },
        drawerItemStyle: {
          borderRadius: 0,
          marginHorizontal: 10,
          marginVertical: 4,
          overflow: "hidden",
        },

        headerStyle: {
          backgroundColor: COLORS.bg,
        },
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "700",
          color: COLORS.active,
        },
        headerTintColor: COLORS.active,
        headerShadowVisible: false,

        overlayColor: "transparent",

        drawerStatusBarAnimation: "fade",
      }}
    >
      {screens.map((screen) => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name as keyof DrawerParamList}
          component={screen.component}
          initialParams={{ category: screen.category } as any}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name={screen.icon as any} color={color} size={size} />
            ),
          }}
        />
      ))}
      <Drawer.Screen name="TodoList" component={TodoList} />
    </Drawer.Navigator>
  );
}
