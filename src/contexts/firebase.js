import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);