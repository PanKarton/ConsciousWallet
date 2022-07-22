import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';
import { StyledCancelIconWrapper, StyledInput, StyledWrapper } from './SearchBar.styles';

const SearchBar = ({ placeholderText }) => {
  const { register, watch, reset } = useForm();
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  useEffect(() => {
    const subscribe = watch(
      debounce((data) => {
        if (data.searchBar) {
          setIsDeleteVisible(true);
        } else {
          setIsDeleteVisible(false);
        }
        console.log(data);
      }, 250),
    );

    return () => subscribe.unsubscribe();
  }, [watch]);

  const clearInput = () => {
    setIsDeleteVisible(false);
    reset();
  };

  return (
    <StyledWrapper>
      <form>
        <label htmlFor="searchBar">
          <AiOutlineSearch className="search-icon" />
          <StyledInput {...register('searchBar')} id="searchBar" type="text" placeholder={placeholderText} />
        </label>
      </form>
      {isDeleteVisible && (
        <StyledCancelIconWrapper onClick={clearInput}>
          <RiCloseFill className="close-icon" />
        </StyledCancelIconWrapper>
      )}
    </StyledWrapper>
  );
};
SearchBar.propTypes = {
  placeholderText: PropTypes.string,
};

export default SearchBar;
