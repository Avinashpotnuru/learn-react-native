import { StyleSheet, View,Text } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#72f05ee2",
    display: "flex",
    gap: 10,
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 50,
    color: "#333",
    textAlign: "center",
    width: "100%",
    maxWidth: 400,
    textTransform: "uppercase",
  },
  input: {
    width: "70%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    width: "20%",
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    paddingBottom: 0,
  },
  noTodo: {
    fontSize: 18,
    color: "red",
    marginTop: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  loading: {
    fontSize: 16,
    color: "#007bff",
  },
  clearAll: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  modalButton: {
    backgroundColor: "green",
    padding: 8,
    borderRadius: 4,
  },
});
