import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import "../styles/ToDo.css";

export default function ToDo() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  const [isAdding, setIsAdding] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (newTodoTitle.trim()) {
      setTodos((currentTodos) => [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newTodoTitle, completed: false },
      ]);
      setNewTodoTitle(""); // Clear the input field
      setIsAdding(false); // Hide the input field after adding the item
    }
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  }

  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div className="todo-container">
      <h1 className="header">Todo List</h1> {/* Heading added here */}
      <TodoList todos={activeTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      
      {isAdding && (
        <div className="new-todo-input">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Enter new task"
          />
          <button onClick={addTodo}>Add</button>
        </div>
      )}

      <button
        className="add-item-btn"
        onClick={() => setIsAdding((prev) => !prev)}
      >
        {isAdding ? "Cancel" : "Add New Item"}
      </button>

      {/* Completed tasks section */}
      {completedTodos.length > 0 && (
        <>
          <h2 className="completed-header">Completed</h2>
          <TodoList todos={completedTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        </>
      )}
    </div>
  );
}
