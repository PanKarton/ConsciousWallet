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
    userBio,
    imageBackgroundColor,
    imgUrl,
  } = data;

  const newUser = { login, firstName, lastName, userBio, imageBackgroundColor, imgUrl, objectID };
  return index.saveObject(newUser);
});

export default client;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
