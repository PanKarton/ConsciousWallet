import { useCallback, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from 'firebase-config';

const useSignUpValidation = () => {
  const [loginError, setLoginError] = useState('');
  const [loginAvailabilityError, setLoginAvailabilityError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordsMatchError, setPasswordMatchError] = useState('');
  const [validationEmailError, setValidationEmailError] = useState('');
  const [emailAvailabilityError, setEmailAvailabilityError] = useState('');
  const [nameError, setNameError] = useState('');
  const [surnameError, setSurnameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [optionalGenderError, setOptionalGenderError] = useState('');

  const usersCollectionRef = collection(firestore, 'users');

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

  const isEmailAvaliable = useCallback(
    async (email) => {
      try {
        let isAvaliable = true;
        const q = query(usersCollectionRef, where('email', '==', email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data().length > 0) isAvaliable = false;
        });

        return isAvaliable;
      } catch (err) {
        console.log(err);
      }
    },
    [usersCollectionRef],
  );

  const isLoginAvaliable = useCallback(
    async (login) => {
      try {
        let isAvaliable = true;
        const q = query(usersCollectionRef, where('login', '==', login));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data()) isAvaliable = false;
        });
        return isAvaliable;
      } catch (err) {
        console.log(`isLoginAvaliabe error:`, err);
      }
    },
    [usersCollectionRef],
  );

  const checkEmailAvailability = useCallback(
    async (email) => {
      try {
        const isAvaliable = await isEmailAvaliable(email);
        const error = isAvaliable ? null : 'Email already used by sameone else.';
        return error;
      } catch (err) {
        console.log('checkEmailAvailability', err);
      }
    },
    [isEmailAvaliable],
  );

  const checkLoginAvailability = useCallback(
    async (login) => {
      try {
        const isAvaliable = await isLoginAvaliable(login);
        const error = isAvaliable ? null : 'Login already used by sameone else';
        return error;
      } catch (err) {
        console.log('checkLoginAvailability', err);
      }
    },
    [isLoginAvaliable],
  );

  const validateAccountInputs = useCallback(
    async ({ login, password, passwordConfirmation, email }, setCanMoveNext) => {
      setCanMoveNext(false);
      const newLoginError = login ? getLoginError(login) : null;
      const newPasswordError = password ? getPasswordError(password) : null;
      const newPasswordMatchError = passwordConfirmation ? getPasswordMatchError(password, passwordConfirmation) : null;
      const newEmailError = email ? getEmailError(email) : null;
      const newEmailAvailabilityError = email && !newEmailError ? await checkEmailAvailability(email) : null;
      const newLoginAvailabilityError = login && !newLoginError ? await checkLoginAvailability(login) : null;

      // Check has no werid characters and set error or ''
      setLoginError(newLoginError);

      // Check if password is str0nk and set error or ''
      setPasswordError(newPasswordError);

      // Check if passwords are the same and set error or ''
      setPasswordMatchError(newPasswordMatchError);

      // Check if email is valid and set error or ''
      setValidationEmailError(newEmailError);

      // Check if email is taken and set error or ''
      setEmailAvailabilityError(newEmailAvailabilityError);

      // Check if login is taken and set error or ''
      setLoginAvailabilityError(newLoginAvailabilityError);

      // Check if all inputs have valid content
      if (newLoginError || newPasswordError || newPasswordError || newEmailError || newEmailAvailabilityError || newLoginAvailabilityError) return setCanMoveNext(false);
      // Check if all inputs contain value
      if (!login || !password || !passwordConfirmation || !email) return setCanMoveNext(false);
      setCanMoveNext(true);
    },
    [checkEmailAvailability, getEmailError, getLoginError, getPasswordMatchError, checkLoginAvailability],
  );

  const validatePersonalDataInputs = useCallback(
    ({ name, surname, birthDay, birthMonth, birthYear, gender, optionalGender }, setCanSubmit) => {
      setCanSubmit(false);
      const newNameError = getNameAndSurnameError(name);
      const newSurnameError = getNameAndSurnameError(surname);
      const newAgeError = getAgeError(birthDay, birthMonth, birthYear);
      const newOptionalGenderError = getNameAndSurnameError(optionalGender);

      setNameError(newNameError);
      setSurnameError(newSurnameError);
      setAgeError(newAgeError);
      setOptionalGenderError(newOptionalGenderError);

      if (!name || !surname || gender === null || newNameError.length > 0 || newSurnameError.length > 0 || newAgeError.length > 0 || newOptionalGenderError.length > 0) {
        setCanSubmit(false);
      } else {
        setCanSubmit(true);
      }
    },
    [getAgeError, getNameAndSurnameError],
  );

  return {
    loginError,
    loginAvailabilityError,
    passwordError,
    passwordsMatchError,
    validationEmailError,
    emailAvailabilityError,
    nameError,
    ageError,
    surnameError,
    optionalGenderError,
    validatePersonalDataInputs,
    validateAccountInputs,
  };
};

export default useSignUpValidation;
