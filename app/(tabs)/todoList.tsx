import TodoItem from "@/components/todo-item";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [todo, setTodo] = useState<string | null>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

  const handleAddTodo = () => {
    if (todo && todo.trim().length > 0) {
      if (editingTodoId) {
        setTodoList(
          todoList.map((item) =>
            item.id === editingTodoId ? { ...item, text: todo.trim() } : item
          )
        );
        setEditingTodoId(null);
        setTodo("");
        Alert.alert("Todo updated successfully");
      } else {
        const newTodo: Todo = {
          id: Date.now(),
          text: todo.trim(),
          completed: false,
        };

        setTodoList([...todoList, newTodo]);
        setTodo("");
        Alert.alert("Todo added successfully");
        Keyboard.dismiss();
      }
    }
  };
  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
    Alert.alert("Todo deleted successfully");
  };
  const handleUpdateTodo = (id: number) => {
    setEditingTodoId(id);
    const todoToUpdate = todoList.find((item) => item.id === id);
    if (todoToUpdate) {
      setTodo(todoToUpdate.text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>todolist </Text>

      <FlatList
        style={{ width: "100%" }}
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            handleDeleteTodo={handleDeleteTodo}
            editingTodoId={editingTodoId}
            handleUpdateTodo={handleUpdateTodo}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.noTodo}>No todos yet!</Text>
        )}
      />
      <Pressable style={styles.clearAll} onPress={() => setTodoList([])}>
          <Text style={styles.buttonText}>Clear All</Text>
        </Pressable>

      <KeyboardAvoidingView
        behavior="padding"
        style={styles.inputContainer}
        keyboardVerticalOffset={10}
      >
        <TextInput
          style={styles.input}
          value={todo ? todo : ""}
          placeholder="enter todo"
          onChangeText={setTodo}
        />
        <Pressable style={styles.button} onPress={handleAddTodo}>
          <Text style={styles.buttonText}>
            {editingTodoId ? "Update" : "Add"}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
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
