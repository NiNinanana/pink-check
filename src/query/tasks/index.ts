import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

import {
  TaskForm,
  TaskListResponse,
  TaskResponse,
  TaskStatus,
  Task,
} from "@/src/types/task";
import { tasksKeys } from "./keys";

export const useGetTasks = (taskStatus: TaskStatus) => {
  return useQuery({
    queryKey: tasksKeys.list(taskStatus),
    queryFn: () =>
      axios.get<TaskListResponse>("/api/task", {
        params: { status: taskStatus },
      }),
    select: (res) => res.data,
  });
};

export const usePostTask = () => {
  return useMutation({
    mutationFn: ({ task }: { task: TaskForm }) =>
      axios.post<TaskResponse>("/api/task", { task }),
  });
};

export const usePatchTaskStatus = () => {
  return useMutation({
    mutationFn: ({ taskStatus, id }: { taskStatus: TaskStatus; id: string }) =>
      axios.patch(`/api/task/${id}/change-status`, { status: taskStatus }),
  });
};

export const useDeleteTask = () => {
  return useMutation({
    mutationFn: ({ id }: { id: string }) => axios.delete(`/api/task/${id}`),
  });
};

export const useGetTask = (id: string) => {
  return useQuery({
    queryKey: tasksKeys.detail(id),
    queryFn: () => axios.get<TaskResponse>(`/api/task/${id}`),
    select: (res) => res.data,
  });
};

export const usePutTask = () => {
  return useMutation({
    mutationFn: ({ task, id }: { task: Task; id?: string }) =>
      axios.put(`/api/task/${id}`, { task }),
  });
};
