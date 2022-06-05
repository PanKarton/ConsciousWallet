// TRZEBA STWORZYC HOOKA, KTÓRY WYPLUWA WALIDACJE INPUTÓW DO SIGN UPA

import { useCallback } from 'react';

const useSignUpValidation = () => {
  const getLoginError = useCallback((login) => {
    if (!login) return ``;
    const loginRegex = /^[A-Za-z0-9]+$/;
    console.log(loginRegex.test(login));
    return loginRegex.test(login)
      ? ''
      : `Your login should not contain any special
         (weird in our opinion) characters eg. [! , @ , # , $ , % , ^ , & , * , ( , ) , / , \\ , . , ]`;
  }, []);

  const getPasswordMatchError = useCallback((password, confirmation) => {
    if (!password || !confirmation) return '';
    return password === confirmation ? '' : 'Passwords do not match each other.';
  }, []);

  const getPasswordError = (password) => {
    // DOKANCZAMY SPRAWDZANIE HASŁA 
    if(!password) 
  };

  const getEmailError = useCallback((email) => {
    if (!email) return '';
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email) ? '' : 'Make sure you enter the correct email address';
  }, []);

  return {
    getLoginError,
    getPasswordError,
    getPasswordMatchError,
    getEmailError,
  };
};

export default useSignUpValidation;
