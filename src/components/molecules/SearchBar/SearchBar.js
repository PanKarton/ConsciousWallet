import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import debounce from 'lodash.debounce';
import { StyledCancelIconWrapper, StyledInput, StyledWrapper } from './SearchBar.styles';
import SearchResultsList from 'components/molecules/SearchResultsList/SearchResultsList';
import useOnClickOutside from 'hooks/useClickOutside';
import useHomeUsersSearchBar from 'hooks/useHomeUsersSearchBar';

const SearchBar = ({ placeholderText }) => {
  const { register, watch, isDeleteVisible, isListOpen, searchResults, clearInput, handleOpenListByInputFocus, setIsDeleteVisible, setIsListOpen, handleSearchByPhrase } = useHomeUsersSearchBar();
  const listRef = useRef();

  useOnClickOutside(listRef, () => setIsListOpen(false));
  useEffect(() => {
    const subscribe = watch(
      debounce((data) => {
        handleSearchByPhrase(data);
      }, 250),
    );

    return () => subscribe.unsubscribe();
  }, [watch, setIsDeleteVisible, setIsListOpen, handleSearchByPhrase]);

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
      {isListOpen && <SearchResultsList ref={listRef} users={searchResults} />}
    </StyledWrapper>
  );
};
SearchBar.propTypes = {
  placeholderText: PropTypes.string,
};
export default SearchBar;
