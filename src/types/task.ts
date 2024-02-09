export type TaskStatus = "not_started" | "progress" | "pending" | "completed";

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  creator: string;
  createdAt: string;
  updatedAt: string;
  assignees: string[];
}

export type TaskForm = Pick<Task, "title" | "assignees">;

export interface TaskResponse {
  tasks: Task[];
}
