
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
interface TodoItemProps {
  todo: Todo;
  editingTodoId: number | null;
  handleUpdateTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const TodoItem = ({
  todo,
  handleDeleteTodo,
  editingTodoId,
  handleUpdateTodo,
}: TodoItemProps) => {
  return (
    <View style={styles.todoItem}>
      <Text>{todo.text}</Text>
      <View style={styles.actionContainer}>
        <Pressable
          style={styles.updateButton}
          onPress={() => handleUpdateTodo(todo.id)}
        >
          <Text style={styles.buttonText}>update</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => handleDeleteTodo(todo.id)}
        >
          <Text style={styles.buttonText}>delete</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  button: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  actionContainer: {
    flexDirection: "row",
    gap: 10,
  },
  updateButton: {
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 4,
  },
});

export default TodoItem;
