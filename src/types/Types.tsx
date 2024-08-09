export interface TodoInitialState {
  todos: TodoType[];
  filter: 'all' | 'complete' | 'incomplete';
  
}

export interface TodoType {
  id: number;
  content: String;
  completed?: boolean;
}
