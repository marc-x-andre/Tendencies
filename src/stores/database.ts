import { defineStore } from "pinia";
import { useFirebaseStore } from "./firebase";
import {
  getFirestore,
  doc,
  setDoc,
  addDoc,
  getDoc,
  collection,
  query,
  getDocs,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";
import { ref } from "vue";
import { useAuthStore } from "./auth";

export type Entry = {
  id?: string;
  somatic: string;
  emotions: string[];
  note: string;
  time: "morning" | "noon" | "night";
  created?: FieldValue;
};

export const useFirestoreStore = defineStore("firestore", () => {
  const { firebaseApp } = useFirebaseStore();
  const { auth } = useAuthStore();
  const firestore = getFirestore(firebaseApp);

  const entriesRef = collection(
    firestore,
    "users",
    `${auth.currentUser?.uid}`,
    "entries"
  );

  const userEntries = ref<Entry[] | undefined>(undefined);
  const loading = ref(false);

  const fetchAllEntries = async () => {
    const querySnapshot = await getDocs(entriesRef);
    userEntries.value = querySnapshot.docs.map((e) => ({
      id: e.id,
      ...e.data(),
    })) as Entry[];
    console.log(userEntries.value);
  };

  const saveEntry = async (entry: Entry) => {
    if (!entry.id) {
      entry.created = serverTimestamp();
    }
    const docRef = await addDoc(entriesRef, entry);
    console.log("Document written with ID: ", docRef.id);
  };
  fetchAllEntries();
  return {
    loading,
    firestore,
    saveEntry,
  };
});
