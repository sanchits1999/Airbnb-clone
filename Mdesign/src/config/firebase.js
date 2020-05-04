import Firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDW_CXtCrl5vGHSQh5Im5Fu9_OgSTjUiGA",
    authDomain: "react-native-251be.firebaseapp.com",
    databaseURL: "https://react-native-251be.firebaseio.com",
    projectId: "react-native-251be",
    storageBucket: "react-native-251be.appspot.com",
    messagingSenderId: "533414588533",
    appId: "1:533414588533:web:7b4f292ebe548a7ef2483c",
    measurementId: "G-PVPTBCWJLZ"
}

// Initialize Firebase
const Fbase = Firebase.initializeApp(firebaseConfig)

export default Fbase