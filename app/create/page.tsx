"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { TaskForm } from "@/src/types/task";

const MOCK_NAMES = ["원영", "유진", "이서", "리즈", "가을", "레이"];

const CreatePage = () => {
  const { handleSubmit, register, setValue, watch } = useForm<TaskForm>();
  const assignees = watch().assignees || [];

  const onSubmit: SubmitHandler<TaskForm> = (data) => {
    console.log(data);
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
      <h2 className="text-xl">Task 만들기</h2>
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
        <div className="flex justify-end">
          <button className="w-fit rounded-lg bg-pink-300 px-5 py-2 text-white">
            생성
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreatePage;
