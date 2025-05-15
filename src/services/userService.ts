// src/services/userService.ts
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const createUserDocument = async (uid: string, data: any) => {
  try {
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, data);
  } catch (error: any) {
    console.error("Erreur lors de la création de l'utilisateur :", error);
    throw error;
  }
};
