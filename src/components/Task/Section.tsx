import React from "react";

import Task from "@/src/components/Task";
import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { TaskStatus } from "@/src/types/task";

interface TaskSectionProps {
  title: string;
  TaskStatus: TaskStatus;
}

const getIcon = (TaskStatus: TaskStatus) => {
  if (TaskStatus === "not_started")
    return <PlayCircleIcon className="h-6 w-6" />;
  if (TaskStatus === "progress")
    return <EllipsisHorizontalCircleIcon className="h-6 w-6" color="blue" />;
  if (TaskStatus === "pending")
    return <PauseCircleIcon className="h-6 w-6" color="red" />;
  if (TaskStatus === "completed")
    return <CheckCircleIcon className="h-6 w-6" color="green" />;
};

const TaskSection = ({ title, TaskStatus }: TaskSectionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        {getIcon(TaskStatus)}
        <h2>{title}</h2>
      </div>
      <div className="flex flex-col gap-3">
        <Task title="hi" />
        <Task title="hi" />
      </div>
    </div>
  );
};

export default TaskSection;
