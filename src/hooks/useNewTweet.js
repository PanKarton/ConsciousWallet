const { useState, useCallback } = require('react');

const useNewTweet = () => {
  const [contentLength, setContentLength] = useState(0);
  const [canTweet, setCanTweet] = useState(false);

  const checkIfCanTweet = useCallback((length) => {
    if (length > 0 && length <= 280) return setCanTweet(true);
    setCanTweet(false);
  }, []);

  return { contentLength, setContentLength, canTweet, setCanTweet, checkIfCanTweet };
};

export default useNewTweet;
