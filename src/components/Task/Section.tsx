import React from "react";

import Task from "@/src/components/Task";
import {
  CheckCircleIcon,
  EllipsisHorizontalCircleIcon,
  PauseCircleIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";

type TaskKey = "not_started" | "progress" | "pending" | "completed";

interface TaskSectionProps {
  title: string;
  taskKey: TaskKey;
}

const getIcon = (taskKey: TaskKey) => {
  if (taskKey === "not_started") return <PlayCircleIcon className="h-6 w-6" />;
  if (taskKey === "progress")
    return <EllipsisHorizontalCircleIcon className="h-6 w-6" color="blue" />;
  if (taskKey === "pending")
    return <PauseCircleIcon className="h-6 w-6" color="red" />;
  if (taskKey === "completed")
    return <CheckCircleIcon className="h-6 w-6" color="green" />;
};

const TaskSection = ({ title, taskKey }: TaskSectionProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        {getIcon(taskKey)}
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
