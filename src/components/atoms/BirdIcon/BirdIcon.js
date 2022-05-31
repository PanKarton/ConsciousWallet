import { FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import React from 'react';

const StyledIcon = styled(FaTwitter)``;

const BirdIcon = ({ ...props }) => <StyledIcon {...props} />;

export default BirdIcon;
