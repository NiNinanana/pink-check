import {
  firebaseCollections,
  firebaseFirestore,
} from "@/src/utils/firebase/store";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  params: { params: { id: string } },
) => {
  const id = params.params.id;

  await deleteDoc(doc(firebaseFirestore, firebaseCollections.task, id));

  return new NextResponse(JSON.stringify({ message: "Success" }), {
    status: 200,
  });
};

export const GET = async (
  req: NextRequest,
  params: { params: { id: string } },
) => {
  const id = params.params.id;
  const docRef = doc(firebaseFirestore, firebaseCollections.task, id);
  const snapshot = await getDoc(docRef);
  const task = snapshot.data();

  return new NextResponse(JSON.stringify({ ...task, id: snapshot.id }), {
    status: 200,
  });
};

export const PUT = async (
  req: NextRequest,
  params: { params: { id: string } },
) => {
  const { task: formTask } = await req.json();
  const id = params.params.id;
  const docRef = await setDoc(
    doc(firebaseFirestore, firebaseCollections.task, id),
    formTask,
  );

  return new NextResponse(JSON.stringify(formTask), {
    status: 200,
  });
};
