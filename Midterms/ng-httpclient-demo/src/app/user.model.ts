export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface TodoResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}
