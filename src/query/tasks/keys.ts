import { TaskStatus } from "@/src/types/task";

export const tasksKeys = {
  all: ["tasks"],
  list: (taskStatus: TaskStatus) => [...tasksKeys.all, "list", taskStatus],
};
