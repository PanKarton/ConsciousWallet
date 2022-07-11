import { useAuth } from 'providers/AuthProvider';
import useFirebaseFirestore from './useFirebaseFirestore';

const { useState, useCallback } = require('react');

const useNewTweet = () => {
  const [contentLength, setContentLength] = useState(0);
  const [canTweet, setCanTweet] = useState(false);
  const { currentUser } = useAuth();
  const { addTweetDoc } = useFirebaseFirestore();

  const checkIfCanTweet = useCallback((length) => {
    if (length > 0 && length <= 280) return setCanTweet(true);
    setCanTweet(false);
  }, []);

  const handleAddTwitter = useCallback(
    async (data) => {
      const date = new Date();
      const tweetData = { authorId: currentUser.id, publicationDate: date.getTime(), ...data };
      await addTweetDoc(tweetData);
    },
    [currentUser.id, addTweetDoc],
  );

  return { contentLength, setContentLength, canTweet, setCanTweet, checkIfCanTweet, handleAddTwitter };
};

export default useNewTweet;
