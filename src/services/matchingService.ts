// src/services/matchingService.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const saveMatch = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, "matchings"), data);
    return docRef.id;
  } catch (error: any) {
    console.error("Erreur enregistrement matching :", error.message);
    throw error;
  }
};
