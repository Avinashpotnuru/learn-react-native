import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "./about";
import Home from "./home";

export type DrawerParamList = {
  Home: undefined;
  About: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
