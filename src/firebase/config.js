import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9tB7HO_yZYajHd945c0nVJlksEQj5-KA",
    databaseURL: "https://reactchatapp-7ec8b-default-rtdb.firebaseio.com/",
    projectId: "reactchatapp-7ec8b",
    appId: "1:682347321849:android:913d4307ebf4263432c528"
};

export default Firebase.initializeApp(firebaseConfig);
