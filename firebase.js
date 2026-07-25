const firebaseConfig = {
  apiKey: "AIzaSyDZTh_UDjv4TGUnWkDBb3JgLOg3uO5pH6k",
  authDomain: "life-link-sebs.firebaseapp.com",
  projectId: "life-link-sebs",
  storageBucket: "life-link-sebs.firebasestorage.app",
  messagingSenderId: "257163285577",
  appId: "1:257163285577:web:db20fd8b653bcfbc43db98",
  measurementId: "G-FPN6BNPL14"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();