import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState, TodoType } from "../types/Types";

const initialState: TodoInitialState = {
  todos: [],
  filter: 'all',
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodoById: (
      state: TodoInitialState,
      action: PayloadAction<number>
    ) => {
      state.todos = [
        ...state.todos.filter((todo: TodoType) => todo.id !== action.payload),
      ];
    },
    updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
      state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)];
    },
    updateTodos: (state, action: PayloadAction<number>) =>{
      state.todos = [...state.todos.filter((todo: TodoType) => todo.id === action.payload ? todo : action.payload),]
    },
   addTodo: (state: TodoInitialState, action: PayloadAction<string> ) => {
    const id = state.todos.length + 1;
    state.todos.push({id, content: action.payload, completed: false});
   },
   toggleTodo: (state: TodoInitialState, action: PayloadAction<number>) => {
    const todo = state.todos.find((todo) => todo.id === action.payload);
    if (todo) {
      todo.completed = !todo.completed;
    }
   },
   setFilter: (state: TodoInitialState, action: PayloadAction<'all' | 'complete' | 'incomplete'>) => {
    state.filter = action.payload;
   }
  },
});
export const { createTodo, removeTodoById, updateTodo, updateTodos, addTodo, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
