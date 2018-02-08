import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const app = firebase.initializeApp({
        apiKey: "AIzaSyCHla5ce388FJ95DmJwShRMTY4UdzNOHu4",
        authDomain: "animal-friends-30f48.firebaseapp.com",
        databaseURL: "https://animal-friends-30f48.firebaseio.com",
        projectId: "animal-friends-30f48"
});
const db = firebase.database(app);
const base = Rebase.createClass(db);

export default base;