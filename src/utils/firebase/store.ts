import { collection, getFirestore } from "firebase/firestore";
import { firebaseApp } from ".";

export const firebaseCollections = {
  task: "task",
};

export const firebaseFirestore = getFirestore(firebaseApp);

export const taskFirestore = collection(
  firebaseFirestore,
  firebaseCollections.task,
);
