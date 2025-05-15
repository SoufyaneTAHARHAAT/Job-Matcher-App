// src/services/companyService.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const createCompany = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, "companies"), data);
    return docRef.id;
  } catch (error: any) {
    console.error("Erreur création société :", error.message);
    throw error;
  }
};
