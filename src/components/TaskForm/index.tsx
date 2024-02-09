"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Task, TaskForm } from "@/src/types/task";
import { usePostTask, usePutTask } from "@/src/query/tasks";
import { useRouter } from "next/navigation";
import useToast from "@/src/utils/toast";
import { useQueryClient } from "@tanstack/react-query";
import { tasksKeys } from "@/src/query/tasks/keys";

interface TaskFormProps {
  formType: "update" | "create";
  defaultTask?: Task;
}

const MOCK_NAMES = ["원영", "유진", "이서", "리즈", "가을", "레이"];

const TaskForm = ({ formType, defaultTask }: TaskFormProps) => {
  if (formType === "update" && !defaultTask)
    throw new Error("formType이 update라면 defaultTask가 있어야 합니다.");

  const queryClient = useQueryClient();
  const { push } = useRouter();
  const { show } = useToast();
  const { handleSubmit, register, setValue, watch } = useForm<TaskForm>({
    defaultValues: {
      assignees: defaultTask?.assignees,
      title: defaultTask?.title,
    },
  });
  const assignees = watch().assignees || [];
  const isCreate = formType === "create";

  const { mutateAsync: postTask } = usePostTask();
  const { mutateAsync: putTask } = usePutTask();

  const onSubmit: SubmitHandler<TaskForm> = async (data) => {
    isCreate || !defaultTask
      ? await postTask({ task: data })
      : await putTask({
          task: { ...defaultTask, ...data },
          id: defaultTask?.id,
        });
    show(`🚀 ${isCreate ? "생성" : "수정"} 완료!`);
    queryClient.refetchQueries({ queryKey: tasksKeys.all });
    push("/");
  };

  const handleAssignee = (name: string) => {
    setValue(
      "assignees",
      assignees.includes(name)
        ? assignees.filter((assignee) => assignee !== name)
        : [...assignees, name],
    );
  };

  const isAssignee = (name: string) => {
    return assignees.includes(name);
  };

  return (
    <main className="flex flex-col gap-5 px-5 py-10">
      <h2 className="text-xl">업무 {isCreate ? "생성" : "수정"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <label className="flex flex-col">
            <p>제목</p>
            <input className="border px-1 py-2" {...register("title")} />
          </label>
          <label className="flex flex-col">
            <p>담당자</p>
            <div className="flex flex-col border">
              {MOCK_NAMES.map((name) => (
                <div
                  key={name}
                  onClick={() => handleAssignee(name)}
                  className={`border-b p-1 ${isAssignee(name) ? "bg-pink-100" : ""}`}
                >
                  {name}
                </div>
              ))}
            </div>
            <select className="hidden" multiple {...register("assignees")} />
          </label>
        </div>
        <div className="flex justify-end gap-3">
          {!isCreate && (
            <button
              type="button"
              onClick={() => push("/")}
              className="w-fit rounded-lg bg-gray-300 px-5 py-2 text-white"
            >
              취소
            </button>
          )}
          <button className="w-fit rounded-lg bg-pink-300 px-5 py-2 text-white">
            {isCreate ? "생성" : "수정"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default TaskForm;
