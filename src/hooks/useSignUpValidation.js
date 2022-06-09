import { useCallback } from 'react';

const useSignUpValidation = () => {
  const getLoginError = useCallback((login) => {
    if (!login) return ``;
    const loginRegex = /^[A-Za-z0-9]{1,12}$/;
    return loginRegex.test(login)
      ? ''
      : `Your login should be max 12 characters long and should not contain any special
         (weird in our opinion) characters eg. [! , @ , # , $ , % , ^ , & , * , ( , ) , / , \\ , . , ]`;
  }, []);

  const getPasswordMatchError = useCallback((password, confirmation) => {
    if (!password || !confirmation) return '';
    return password === confirmation ? '' : 'Passwords do not match each other.';
  }, []);

  const getPasswordError = (password) => {
    if (!password) return '';
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    return passwordPattern.test(password)
      ? ''
      : 'Sorry, that password is not strong enough. Passwords must be at least 8 and max 15 characters long, contain at least: one small and capital letter, one number and one special character of [@$!%*?&]';
  };

  const getEmailError = useCallback((email) => {
    if (!email) return '';
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email) ? '' : 'Make sure you enter the correct email address';
  }, []);

  const getNameAndSurnameError = useCallback((value) => {
    if (!value) return '';
    const regex = /^[A-Za-z]+$/;
    return regex.test(value) ? '' : 'You can use only capital and small letters';
  }, []);

  const getAgeError = useCallback((day, month, year) => {
    const birthdayDate = new Date(year, month, day);
    const birthdayDateMS = birthdayDate.getTime();

    const nowDate = new Date();
    const nowDateMS = nowDate.getTime();

    const differenceMS = nowDateMS - birthdayDateMS;

    const minDifferenceMS = 410240038000;

    return differenceMS > minDifferenceMS ? '' : 'You are too young to use Twitter-copy. Only 13+ users allowed.';
  }, []);

  return {
    getLoginError,
    getPasswordError,
    getPasswordMatchError,
    getEmailError,
    getNameAndSurnameError,
    getAgeError,
  };
};

export default useSignUpValidation;
