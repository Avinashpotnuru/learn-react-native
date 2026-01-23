// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { useEffect } from "react";
// import { Image, StyleSheet, View } from "react-native";

// type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

// export default function SplashScreen({ navigation }: Props) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace("Login"); // ⏱️ 4 sec
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image
//         source={{
//           uri: "https://media.tenor.com/8YdgikXYxHEAAAAM/breaking-news.gif",
//         }}
//         style={styles.image}
//         resizeMode="contain"
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#ecfdf5",
//   },
//   image: {
//     width: 220,
//     height: 220,
//   },
// });
