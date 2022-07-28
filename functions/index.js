const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('users');

exports.addToIndex = functions.firestore.document('users/{userID}').onCreate(async (snapshot) => {
  const data = snapshot.data();
  const objectID = snapshot.id;
  const {
    login,
    name: { first: firstName, last: lastName },
  } = data;

  const newUser = { login, firstName, lastName, objectID };
  return index.saveObject(newUser);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// TRZEBA  ZROBIC FIREBASE FUNCTIONS  INIT ITP ZEBY SIE FOLDER FUNCTIONS ZROBIL
