import { useAuth } from 'providers/AuthProvider';
import { useDispatch } from 'react-redux';
import { handleNewTweetModalClose } from 'store/slices/isNewTweetModalOpenSlice';
import useFirebase from './useFirebase';

const { useState, useCallback } = require('react');

const useNewTweet = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [contentLength, setContentLength] = useState(0);
  const [canTweet, setCanTweet] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const { currentUser } = useAuth();
  const { addTweetDoc } = useFirebase();
  const dispatch = useDispatch();

  const closeModal = useCallback(() => dispatch(handleNewTweetModalClose()), [dispatch]);

  const checkIfCanTweet = useCallback((length) => {
    if (length > 0 && length <= 280) return setCanTweet(true);
    setCanTweet(false);
  }, []);

  const handleAddTwitter = useCallback(
    async (data) => {
      try {
        // Start loading animation on button
        setIsButtonLoading(true);
        // Set update date in ms from 1970
        const date = new Date();
        // Form tweet data object
        const tweetData = { authorId: currentUser.userId, publicationDate: date.getTime(), likes: 0, ...data };
        // Upload data
        await addTweetDoc(tweetData);
        // Stop loading animation on button
        setIsButtonLoading(false);
        // Clear tweet text
        setTweetContent('');
        // Close modal
        closeModal();
      } catch (err) {
        console.log(err);
      }
    },
    [currentUser, addTweetDoc, closeModal],
  );

  return { isButtonLoading, contentLength, setContentLength, canTweet, setCanTweet, checkIfCanTweet, handleAddTwitter, tweetContent, setTweetContent };
};

export default useNewTweet;
