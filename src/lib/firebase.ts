import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAK9dHun6_d-x6oz_9Yrks7xGuL7Y-CQRQ",
  authDomain: "halal-sunnah.firebaseapp.com",
  projectId: "halal-sunnah",
  storageBucket: "halal-sunnah.firebasestorage.app",
  messagingSenderId: "442638955962",
  appId: "1:442638955962:web:9c3bc3dbba16b0b4661983",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
