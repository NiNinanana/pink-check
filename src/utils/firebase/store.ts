import { collection, getFirestore } from "firebase/firestore";
import { firebaseApp } from ".";

export const firebaseCollections = {
  task: "task",
};

const firebaseFirestore = getFirestore(firebaseApp);

export const taskFirestore = collection(
  firebaseFirestore,
  firebaseCollections.task,
);
