import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase";
import { getFirestore, collection } from "firebase/firestore";
import { useAuthStore } from "./auth";

export const useFirestoreStore = defineStore("firestore", () => {
  const { firebaseApp } = useFirebaseStore();
  const { auth } = useAuthStore();
  const firestore = getFirestore(firebaseApp);

  const getEntryCol = () => {
    return collection(
      firestore,
      "users",
      `${auth.currentUser?.uid}`,
      "entries"
    );
  };

  return {
    firestore,
    getEntryCol,
  };
});
