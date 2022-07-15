import { auth, db } from 'firebase-config';
import { addDoc, collection, collectionGroup, doc, getDoc, getDocs, limit, orderBy, query, setDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const useFirebaseFirestore = () => {
  const customCreateUserWithEmailAndPassword = useCallback(async (email, password) => {
    try {
      // Create user in auth and get response
      const authResponse = await createUserWithEmailAndPassword(auth, email, password);
      // Set id in local storage
      localStorage.setItem('token', authResponse.user.uid);
      // Return id from response
      return authResponse.user.uid;
    } catch (error) {
      console.log('handleCreateUserWithEmailAndPassword error:', error.code);
    }
  }, []);

  const setUserDoc = useCallback(async (id, data) => {
    try {
      // Create document
      const document = doc(db, 'users', id);
      // Set (requires id) document to firestore db
      await setDoc(document, { ...data });
    } catch (err) {
      console.log('setUserDoc: ', err);
    }
  }, []);

  const customSignInWithLoginAndPassword = useCallback(async (email, password) => {
    try {
      // Send query to auth and recieve response with uid in it
      const authResponse = await signInWithEmailAndPassword(auth, email, password);
      console.log(authResponse);
      // Set id in local storage
      localStorage.setItem('token', authResponse.user.uid);
      // Return user id
      return authResponse.user.uid;
    } catch (err) {
      // Return error if sth happens
      return { ...err };
    }
  }, []);

  const getUserDocById = useCallback(async (id) => {
    try {
      // Create ref to doc based on id
      const docRef = doc(db, 'users', id);
      // Get doc
      const firebaseResponse = await getDoc(docRef);
      // Return object with data and uid
      return {
        id,
        ...firebaseResponse.data(),
      };
    } catch (err) {
      // Return error if sth happens
      return err.code;
    }
  }, []);

  const logOut = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const addTweetDoc = useCallback(async (data) => {
    try {
      // Create collection ref
      const collectionRef = collection(db, `users/${data.authorId}/tweets`);
      // Create document
      await addDoc(collectionRef, data);
    } catch (err) {
      console.log(`catch error: `, err);
    }
  }, []);

  const getXLastTweets = useCallback(async (num) => {
    const tweetsCollectionGroup = collectionGroup(db, 'tweets');
    const q = query(tweetsCollectionGroup, orderBy('publicationDate', 'desc'), limit(num));
    const response = await getDocs(q);
    response.forEach((doc) => {
      console.log(doc.id, '==', doc.data());
    });
  }, []);

  return {
    customCreateUserWithEmailAndPassword,
    setUserDoc,
    customSignInWithLoginAndPassword,
    getUserDocById,
    logOut,
    addTweetDoc,
    getXLastTweets,
  };
};

export default useFirebaseFirestore;
