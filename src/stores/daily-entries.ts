import { defineStore } from "pinia";
import { useFirestoreStore } from "./firestore";
import {
  addDoc,
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
  time: "morning" | "afternoon" | "evening";
  date: Date | { seconds: number };
  created?: FieldValue;
};

export type DayEntries = {
  morning: DailyEntry;
  afternoon: DailyEntry;
  evening: DailyEntry;
};

export const useDailyEntriesStore = defineStore("dailyEntries", () => {
  const { getEntryCol } = useFirestoreStore();

  const allEntry = ref<DailyEntry[] | undefined>(undefined);
  const selectedDate = ref<Date>(new Date());
  const selectedDateEntries = ref<DailyEntry[] | undefined>(undefined);

  const setSelectedDate = async (date: Date) => (selectedDate.value = date);

  const fetchAllEntries = async () => {
    const querySnapshot = await getDocs(getEntryCol());
    allEntry.value = querySnapshot.docs.map((e) => ({
      id: e.id,
      ...e.data(),
    })) as DailyEntry[];
    // WIP set selected date
    selectedDateEntries.value = allEntry.value.filter((e) => {
      if (e.date?.seconds) {
        return (
          new Date().toDateString() === new Date(e.date.seconds).toDateString()
        );
      }
    });
    console.log(selectedDateEntries.value);
  };

  const saveEntry = async (entry: DailyEntry) => {
    if (!entry.id) {
      entry.created = serverTimestamp();
      entry.date = selectedDate.value;
    }
    const docRef = await addDoc(getEntryCol(), entry);
    console.log("Document written with ID: ", docRef.id);
  };

  return {
    allEntry,
    saveEntry,
    selectedDate,
    setSelectedDate,
    fetchAllEntries,
  };
});
