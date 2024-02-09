"use client";

import React from "react";

import Task from "@/src/components/Task";
import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { TaskStatus } from "@/src/types/task";
import { useGetTasks } from "../../query/tasks";

interface TaskSectionProps {
  title: string;
  taskStatus: TaskStatus;
}

const getIcon = (taskStatus: TaskStatus) => {
  if (taskStatus === "not_started")
    return <PlayCircleIcon className="h-6 w-6" />;
  if (taskStatus === "progress")
    return <EllipsisHorizontalCircleIcon className="h-6 w-6" color="blue" />;
  if (taskStatus === "pending")
    return <PauseCircleIcon className="h-6 w-6" color="red" />;
  if (taskStatus === "completed")
    return <CheckCircleIcon className="h-6 w-6" color="green" />;
};

const TaskSection = ({ title, taskStatus }: TaskSectionProps) => {
  const { data, isLoading } = useGetTasks(taskStatus);

  if (isLoading) return null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        {getIcon(taskStatus)}
        <h2>{title}</h2>
      </div>
      <div className="flex flex-col gap-3">
        {data?.tasks.map((task) => (
          <Task id={task.id} title={task.title} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default TaskSection;
