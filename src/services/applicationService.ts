import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const submitApplication = async (data: any) => {
  try {
    const docRef = await addDoc(collection(db, "applications"), data);
    return docRef.id;
  } catch (error: any) {
    console.error("Erreur envoi candidature :", error.message);
    throw error;
  }
};
