import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const config = {
    apiKey: "AIzaSyDAlY9-wO5eDHRvO43c8G9gbPYDi2xf6NI",
    authDomain: "expensify-viper-m.firebaseapp.com",
    databaseURL: "https://expensify-viper-m-default-rtdb.firebaseio.com",
    projectId: "expensify-viper-m",
    storageBucket: "expensify-viper-m.appspot.com",
    messagingSenderId: "731857773411",
    appId: "1:731857773411:web:3f2b83df39042ca15c6956",
    measurementId: "G-9EV69CCM3T"
};

const app = initializeApp(config);
const database = getDatabase(app)

set(ref(database), {
    username: 'Mohit Sharma',
    uid: '12CBS1079',
    age: 21,
    location: {
        city: 'Kaithl',
        country: 'India'
    }
});

set(ref(database, 'location/city'),
    'Haryana'
);