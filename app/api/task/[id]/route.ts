import {
  firebaseCollections,
  firebaseFirestore,
} from "@/src/utils/firebase/store";
import { deleteDoc, doc } from "firebase/firestore";
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
