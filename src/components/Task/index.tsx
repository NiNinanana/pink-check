"use client";

import React from "react";
import { Menu } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useDeleteTask, usePatchTaskStatus } from "@/src/query/tasks";
import { TaskStatus } from "@/src/types/task";
import { useQueryClient } from "@tanstack/react-query";
import { tasksKeys } from "@/src/query/tasks/keys";

interface TaskProps {
  title: string;
  id: string;
}

const Task = ({ title, id }: TaskProps) => {
  const { mutateAsync: patchMutateAsync } = usePatchTaskStatus();
  const { mutateAsync: deleteMutateAsync } = useDeleteTask();
  const queryClient = useQueryClient();

  const handleChangeStatus = async (status: TaskStatus) => {
    await patchMutateAsync({ taskStatus: status, id });
    queryClient.refetchQueries({ queryKey: tasksKeys.all });
  };

  const handleDeleteTask = async () => {
    await deleteMutateAsync({ id });
    queryClient.refetchQueries({ queryKey: tasksKeys.all });
  };

  return (
    <div className="flex h-12 items-center justify-between px-5 shadow-md">
      <span>{title}</span>
      <Menu as="div" className="relative">
        <Menu.Button>
          <EllipsisVerticalIcon className="w-6" />
        </Menu.Button>
        <Menu.Items className="absolute right-0 z-10 mt-2 flex w-56 flex-col rounded-md bg-white shadow-lg">
          <Menu.Item
            onClick={() => handleChangeStatus("not_started")}
            as="button"
            className="px-5 py-1 hover:bg-gray-100"
          >
            시작 전으로 이동
          </Menu.Item>
          <Menu.Item
            onClick={() => handleChangeStatus("progress")}
            as="button"
            className="px-5 py-1 hover:bg-gray-100"
          >
            진행 중으로 이동
          </Menu.Item>
          <Menu.Item
            onClick={() => handleChangeStatus("pending")}
            as="button"
            className="px-5 py-1 hover:bg-gray-100"
          >
            지연으로 이동
          </Menu.Item>
          <Menu.Item
            onClick={() => handleChangeStatus("completed")}
            as="button"
            className="px-5 py-1 hover:bg-gray-100"
          >
            완료로 이동
          </Menu.Item>
          <Menu.Item
            as="button"
            className="px-5 py-1 text-red-500 hover:bg-gray-100"
            onClick={handleDeleteTask}
          >
            삭제
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default Task;
