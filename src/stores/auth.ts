import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

import {
  getAuth,
  setPersistence,
  signInWithRedirect,
  inMemoryPersistence,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { useFirebaseStore } from "./firebase";

interface AuthError {
  errorCode: string;
  errorMessage: string;
}

export const useAuthStore = defineStore("auth", () => {
  const { firebaseApp } = useFirebaseStore();
  const auth = getAuth(firebaseApp);

  const error: Ref<AuthError | false> = ref(false);

  async function signInPopup() {
    error.value = false;

    setPersistence(auth, inMemoryPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        return signInWithRedirect(auth, provider);
      })
      .catch((err) => {
        // Handle Errors here.
        error.value = {
          errorCode: err.code,
          errorMessage: err.message,
        };
      });
  }

  function logOut() {
    console.log("logOut");
    error.value = false;
    signOut(auth).catch((err) => {
      error.value = err;
    });
  }

  return {
    error,
    signInPopup,
    logOut,
    auth,
  };
});
