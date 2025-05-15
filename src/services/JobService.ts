// src/services/jobService.ts
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const postJobOffer = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, "job_offers"), data);
    return docRef.id;
  } catch (error: any) {
    console.error("Erreur publication offre :", error.message);
    throw error;
  }
};
