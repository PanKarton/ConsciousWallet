import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useTheme } from 'styled-components';

const CharactersNumberProgressbar = ({ number }) => {
  const { colors } = useTheme();

  const setColor = (number) => {
    if (number <= 260) return colors.twBlue;
    if (number < 280) return colors.warningOrange;
    return colors.red;
  };

  return (
    <CircularProgressbar
      styles={buildStyles({
        textSize: '40px',
        textColor: setColor(number),
        pathColor: setColor(number),
        trailColor: '#d6d6d6',
      })}
      value={(number / 280) * 100}
      text={number <= 260 ? '' : `${280 - number}`}
    />
  );
};
CharactersNumberProgressbar.propTypes = {
  number: PropTypes.number,
};

export default CharactersNumberProgressbar;
