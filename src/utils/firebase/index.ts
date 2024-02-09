import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAd2KZ5emX0SqqHfumaTI3l0kfrUWpxrKs",
  authDomain: "pink-check.firebaseapp.com",
  projectId: "pink-check",
  storageBucket: "pink-check.appspot.com",
  messagingSenderId: "910730512431",
  appId: "1:910730512431:web:646c80dc6a36b9b95f1eda",
};

export const firebaseApp = initializeApp(firebaseConfig);
