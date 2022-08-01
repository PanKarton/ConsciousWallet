import { useCallback, useState } from 'react';
import useFirebase from './useFirebase';

const useHomeTweetList = () => {
  const [tweets, setTweets] = useState([]);
  const { getXLastTweets, listenForCollectionGroupChanges } = useFirebase();

  const initiateTweetList = useCallback(() => {
    const unsubscribe = listenForCollectionGroupChanges(setTweets);
    (async () => {
      try {
        const tweetsResponse = await getXLastTweets(10);
        if (tweetsResponse) setTweets(tweetsResponse);
      } catch (err) {
        console.log('TweetsList useEffect error:', err);
      }
    })();
    return unsubscribe;
  }, [setTweets, getXLastTweets, listenForCollectionGroupChanges]);

  return { tweets, initiateTweetList };
};

export default useHomeTweetList;
