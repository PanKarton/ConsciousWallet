import { auth, db } from 'firebase-config';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useCallback } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const useFirebaseFirestore = () => {
  const customCreateUserWithEmailAndPassword = useCallback(async (email, password) => {
    try {
      // Create user in auth and get response
      const response = await createUserWithEmailAndPassword(auth, email, password);
      // Return id from response
      return response.user.uid;
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
      console.log('setUserDoc', err);
    }
  }, []);

  const customSignInWithLoginAndPassword = useCallback(async (email, password) => {
    try {
      // Send query to auth and recieve response with uid in it
      const authResponse = await signInWithEmailAndPassword(auth, email, password);
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
  return {
    customCreateUserWithEmailAndPassword,
    setUserDoc,
    customSignInWithLoginAndPassword,
    getUserDocById,
  };
};

export default useFirebaseFirestore;
