import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from 'styled-components';

const CharactersNumberProgressbar = ({ number }) => {
  const { colors } = useTheme();

  const setCircleColor = (number) => {
    if (number <= 260) return colors.twBlue;
    if (number < 280) return colors.warningOrange;
    return colors.red;
  };

  return (
    <CircularProgressbar
      styles={buildStyles({
        textSize: '48px',
        pathColor: setCircleColor(number),
        trailColor: '#d6d6d6',
      })}
      value={number}
      text={number <= 260 ? '' : `${280 - number}`}
    />
  );
};
CharactersNumberProgressbar.propTypes = {};

export default CharactersNumberProgressbar;
