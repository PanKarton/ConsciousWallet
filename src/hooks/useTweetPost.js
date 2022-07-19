import { useCallback, useState } from 'react';
import useFirebaseFirestore from './useFirebaseFirestore';

const useTweetPost = () => {
  const [authorData, setAuthorData] = useState(null);
  const [loadingDeleteIcon, setLoadingDeleteIcon] = useState(false);
  const { getUserDocById, deleteTweetDocById } = useFirebaseFirestore();

  const initiateTweetPost = useCallback(
    (authorId) => {
      if (authorData) return;
      (async () => {
        try {
          const responseData = await getUserDocById(authorId);
          setAuthorData(responseData);
        } catch (err) {
          console.log(`Tweet component useEffect error:`, err);
        }
      })();
    },
    [authorData, getUserDocById],
  );

  const refactorPostDate = useCallback((postDate) => {
    const nowDate = new Date();
    const differenceMs = nowDate.getTime() - postDate;
    let newDate;

    if (differenceMs <= 3600000) {
      newDate = `${Math.floor((nowDate.getTime() - postDate) / 1000 / 60)} min`;
    } else if (differenceMs <= 86400000) {
      newDate = `${Math.floor((nowDate.getTime() - postDate) / 1000 / 60 / 60)} h`;
    } else {
      const newDateObject = new Date(postDate);
      newDate = newDateObject.toLocaleString('en-EN', { day: '2-digit', month: 'short' });
    }
    return newDate;
  }, []);

  const handleDeleteTweet = useCallback(
    async (tweetId, authorId) => {
      try {
        console.log('witam');
        setLoadingDeleteIcon(true);

        // TRZEBA ZROBIC TAK ZEBY UPDATOWAŁO LISTE ZDISPLAYOWANYCH TWEETÓW
        //

        await deleteTweetDocById(tweetId, authorId);

        setLoadingDeleteIcon(false);
      } catch (err) {
        console.log('useTweetPost handleDeleteTweet error', err);
      }
    },
    [deleteTweetDocById],
  );

  return { authorData, initiateTweetPost, refactorPostDate, handleDeleteTweet, loadingDeleteIcon };
};

export default useTweetPost;
