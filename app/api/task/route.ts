import { Query, addDoc, collection, getDocs, query } from "firebase/firestore";

import { Task } from "@/src/types/task";
import {
  firebaseCollections,
  firebaseFirestore,
  taskFirestore,
} from "@/src/utils/firebase/store";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const taskStatus = searchParams.get("status");
  const snapshot = await getDocs(query(taskFirestore) as Query<Task, Task>);
  const tasks = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  const filteredTasks = tasks.filter((task) => task.status === taskStatus);

  return new NextResponse(JSON.stringify({ tasks: filteredTasks }), {
    status: 200,
  });
};

export const POST = async (req: NextRequest) => {
  const { task: formTask } = await req.json();

  const task = { ...formTask, status: "not_started", creator: "나" };

  const docRef = await addDoc(
    collection(firebaseFirestore, firebaseCollections.task),
    task,
  );

  return new NextResponse(JSON.stringify(task), {
    status: 200,
  });
};
