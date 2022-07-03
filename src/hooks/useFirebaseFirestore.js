import { db } from 'firebase-config';
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useCallback } from 'react';

const useFirebaseFirestore = () => {
  // Ref to users collection
  const usersCollectionRef = collection(db, 'users');

  const addUser = useCallback(
    async (userData) => {
      return await addDoc(usersCollectionRef, userData);
    },
    [usersCollectionRef],
  );

  const fetchUserById = useCallback(
    async (id) => {
      try {
        const docRef = doc(usersCollectionRef, id);
        const data = await getDoc(docRef);
        return data;
      } catch (err) {
        console.log('useFireBaseFirestore fetchUserById error:', err);
      }
    },
    [usersCollectionRef],
  );

  const fetchUserByEmailAndPassword = useCallback(
    async (email, password) => {
      // Array of query arguments
      const queryArgs = [where('email', '==', email), where('password', '==', password)];
      // Query in variable
      const q = query(usersCollectionRef, ...queryArgs);
      // Query for data and instant return it
      return await getDocs(q);
    },
    [usersCollectionRef],
  );

  return { addUser, fetchUserById, fetchUserByEmailAndPassword };
};

export default useFirebaseFirestore;
