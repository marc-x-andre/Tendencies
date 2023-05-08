// Import the functions you need from the SDKs you need
import { ref } from "vue";
import { defineStore } from "pinia";
import { initializeApp } from "firebase/app";

const app = initializeApp({
  apiKey: "AIzaSyDdVyFONI0JA4xmRrr7X525s7CIQdABuQ0",
  authDomain: "tendencies-mxa.firebaseapp.com",
  projectId: "tendencies-mxa",
  storageBucket: "tendencies-mxa.appspot.com",
  messagingSenderId: "142209160808",
  appId: "1:142209160808:web:2da727969c8170c7f20ddd",
  measurementId: "G-F867VTFPV9",
});

export const useFirebaseStore = defineStore("firebase", () => {
  const firebaseApp = ref(app);
  return {
    firebaseApp,
  };
});
