import { defineStore } from "pinia";
import { useFirestoreStore } from "./firestore";
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

export type DailyEntry = {
  id?: string;
  somatic: string;
  emotions: string[];
  note: string;
  time: "morning" | "noon" | "night";
  created?: FieldValue;
};

export const useDailyEntriesStore = defineStore("dailyEntries", () => {
  const { firestore, entriesCollectionRef } = useFirestoreStore();

  const userEntries = ref<DailyEntry[] | undefined>(undefined);
  const loading = ref(false);

  const fetchAllEntries = async () => {
    const querySnapshot = await getDocs(entriesCollectionRef);
    userEntries.value = querySnapshot.docs.map((e) => ({
      id: e.id,
      ...e.data(),
    })) as DailyEntry[];
    console.log(userEntries.value);
  };

  const saveEntry = async (entry: DailyEntry) => {
    if (!entry.id) {
      entry.created = serverTimestamp();
    }
    const docRef = await addDoc(entriesCollectionRef, entry);
    console.log("Document written with ID: ", docRef.id);
  };
  fetchAllEntries();
  return {
    loading,
    firestore,
    saveEntry,
  };
});
