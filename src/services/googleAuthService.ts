import * as Google from "expo-auth-session/providers/google";
import { useEffect } from "react";
import { onAuthStateChanged, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/firebase";

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "F1:03:...:84:7D", // récupérable dans console.firebase.google.com
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return { request, promptAsync };
};
