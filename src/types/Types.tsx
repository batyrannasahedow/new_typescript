export interface TodoInitialState {
  todos: TodoType[];
  completed?: boolean
}

export interface TodoType {
  id: number,
  content: String
}
