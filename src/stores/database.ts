import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export const useFirestoreStore = defineStore("firestore", () => {
  const { firebaseApp } = useFirebaseStore();
  const { auth } = useAuthStore();
  const firestore = getFirestore(firebaseApp);

  const loading = ref(false);

  const saveEntry = async (
    somatic: string,
    emotion: string,
    time: "morning" | "noon " | "night"
  ) => {
    console.log(auth.currentUser?.uid);
    const docRef = await addDoc(
      collection(firestore, "users", `${auth.currentUser?.uid}`, "entries"),
      {
        somatic,
        emotion,
        time,
      }
    );
    console.log("Document written with ID: ", docRef.id);
  };
  return {
    loading,
    firestore,
    saveEntry,
  };
});
