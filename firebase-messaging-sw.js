importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({

  apiKey: "AIzaSyBrn1vH0CcPbCHvmg9MyoqOl7jTNOmANTg",
  authDomain: "life-link-sebs.firebaseapp.com",
  projectId: "life-link-sebs",
  storageBucket: "life-link-sebs.firebasestorage.app",
  messagingSenderId: "257163285577",
  appId: "1:257163285577:web:db20fd8b653bcfbc43db98"

});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "https://cdn-icons-png.flaticon.com/512/2069/2069768.png"
    }
  );

});