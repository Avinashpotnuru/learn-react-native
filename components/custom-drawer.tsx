import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, StyleSheet, View } from "react-native";

export default function CustomDrawer(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://www.shutterstock.com/image-vector/live-reportage-conceptual-logo-vector-260nw-758729425.jpg",
          }}
          style={styles.avatar}
        />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      {/* Footer */}
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 30,
    alignItems: "center",
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#065f46",
  },
  email: {
    fontSize: 14,
    color: "#047857",
  },
  divider: {
    height: 1,

    marginVertical: 12,
    marginHorizontal: 16,
  },
  footer: {
    marginTop: 20,
    padding: 16,
    borderTopWidth: 1,
   
  },
  logout: {
    fontSize: 16,
    fontWeight: "600",
    color: "#dc2626",
  },
});
