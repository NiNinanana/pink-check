"use client";

import React from "react";

import TaskForm from "@/src/components/TaskForm";
import { useGetTask } from "@/src/query/tasks";

interface UpdatePageProps {
  params: { id: string };
}

const UpdatePage = ({ params }: UpdatePageProps) => {
  const { data } = useGetTask(params.id);

  console.log(data);

  if (!data) return null;

  return <TaskForm formType="update" defaultTask={data} />;
};

export default UpdatePage;
