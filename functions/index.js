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

  let loginReference = login;
  let login_suffixes = [];
  let firstNameReference = firstName;
  let firstName_suffixes = [];
  let lastNameReference = lastName;
  let lastName_suffixes = [];

  while (loginReference.length > 1) {
    loginReference = loginReference.substr(1);
    login_suffixes.push(loginReference);
  }
  while (firstNameReference.length > 1) {
    firstNameReference = firstNameReference.substr(1);
    firstName_suffixes.push(firstNameReference);
  }
  while (lastNameReference.length > 1) {
    lastNameReference = lastNameReference.substr(1);
    lastName_suffixes.push(lastNameReference);
  }

  const newUser = { login, firstName, lastName, userBio, imageBackgroundColor, imgUrl, login_suffixes, firstName_suffixes, lastName_suffixes, objectID };
  return index.saveObject(newUser);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
