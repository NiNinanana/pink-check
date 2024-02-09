import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { TaskResponse, TaskStatus } from "@/src/types/task";
import { tasksKeys } from "./keys";

export const useGetTasks = (taskStatus: TaskStatus) => {
  return useQuery({
    queryKey: tasksKeys.list(taskStatus),
    queryFn: () =>
      axios.get<TaskResponse>("/api/task", { params: { status: taskStatus } }),
    select: (res) => res.data,
  });
};
