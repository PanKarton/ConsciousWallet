import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';
import { StyledCancelIconWrapper, StyledInput, StyledWrapper } from './SearchBar.styles';
import SearchResultsList from 'components/molecules/SearchResultsList/SearchResultsList';
import useOnClickOutside from 'hooks/useClickOutside';

const SearchBar = ({ placeholderText }) => {
  const { register, watch, reset } = useForm();
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const listRef = useRef();

  useOnClickOutside(listRef, () => setIsListOpen(false));

  useEffect(() => {
    const subscribe = watch(
      debounce((data) => {
        if (data.searchBar) {
          setIsDeleteVisible(true);
          setIsListOpen(true);
        } else {
          setIsDeleteVisible(false);
          setIsListOpen(false);
        }
      }, 250),
    );

    return () => subscribe.unsubscribe();
  }, [watch]);

  const clearInput = () => {
    setIsDeleteVisible(false);
    reset();
  };

  const handleOpenListByInputFocus = (e) => {
    if (!e.target.value) return;
    setIsListOpen(true);
  };

  return (
    <StyledWrapper>
      <form autoComplete="off">
        <label htmlFor="searchBar">
          <AiOutlineSearch className="search-icon" />
          <StyledInput {...register('searchBar')} id="searchBar" type="text" placeholder={placeholderText} onClick={handleOpenListByInputFocus} />
        </label>
      </form>
      {isDeleteVisible && (
        <StyledCancelIconWrapper onClick={clearInput}>
          <RiCloseFill className="close-icon" />
        </StyledCancelIconWrapper>
      )}
      {isListOpen && <SearchResultsList ref={listRef} />}
    </StyledWrapper>
  );
};
SearchBar.propTypes = {
  placeholderText: PropTypes.string,
};

export default SearchBar;
