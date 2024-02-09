import {
  firebaseCollections,
  firebaseFirestore,
} from "@/src/utils/firebase/store";
import { doc, updateDoc } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  params: { params: { id: string } },
) => {
  const { status } = await req.json();
  const id = params.params.id;

  await updateDoc(doc(firebaseFirestore, firebaseCollections.task, id), {
    status,
  });

  return new NextResponse(JSON.stringify({ message: "Success" }), {
    status: 200,
  });
};
