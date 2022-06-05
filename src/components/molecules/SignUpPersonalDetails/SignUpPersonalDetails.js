import CredentialsInput from 'components/atoms/CredentialsInput/CredentialsInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadingWrapper, StyledWrapper } from './SignUpPersonalDetails.styles';

const dayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const yearNumbers = [];
for (let i = 2022; i >= 1900; i--) {
  yearNumbers.push(i);
}

const SignUpPersonalDetails = ({ register, setPrevStep }) => {
  const navigate = useNavigate();

  const handlePreviousStep = () => {
    setPrevStep();
    navigate('/signup');
  };

  // TRZEBA PODZIZELIC TO NA KOMPONENTY I DODAC STYLE, A POTEM LOGIKE

  return (
    <StyledWrapper>
      <HeadingWrapper>
        <h2>Sign Up! </h2>
        <p>Your personal details.</p>
      </HeadingWrapper>
      <div>
        <CredentialsInput isHalfWidth {...register('name')} id="name" type="text" placeholder="Name" required />
        <CredentialsInput isHalfWidth {...register('surname')} id="surname" type="text" placeholder="Surname" required />
      </div>
      <div>
        <span>Day of birth</span>
        <select>
          {dayNumbers.map((day, index) => (
            <option key={index} value={day}>
              {day}
            </option>
          ))}
        </select>
        <select>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select>
          {yearNumbers.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>Gender</span>
        <span>
          <label>Female</label>
          <input type="radio" />
        </span>
        <span>
          <label>Male</label>
          <input type="radio" />
        </span>
        <span>
          <label>Custom</label>
          <input type="radio" />
        </span>
      </div>
      <select>
        <option defaultValue="1" disabled="1">
          Select your pronoun
        </option>
        <option value="1"> She: "Wish her a happy birthday!"</option>
        <option value="2"> He: "Wish him a happy birthday!"</option>
        <option value="3"> They: "Wish them a happy birthday!"</option>
      </select>
      <input type="text" placeholder="Gender (optional)" />
      <p>People who use our service may have uploaded your contact information to Twitter-copy.</p>
      <p>
        By clicking Sign Up, you agree to our Terms. Learn how we collect, use and share your data in our Data Policy and how we use cookies and similar technology in our Cookie Policy. You may
        receive SMS notifications from us and can opt out at any time.
      </p>
      <button onClick={handlePreviousStep}>Back</button>
      <button type="submit">Sign Up</button>
    </StyledWrapper>
  );
};

export default SignUpPersonalDetails;
