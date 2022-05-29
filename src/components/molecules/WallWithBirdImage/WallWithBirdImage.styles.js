import styled from 'styled-components';
import { FaTwitter } from 'react-icons/fa';

export const WallWrapper = styled.div`
  height: 24rem;
  width: 100%;
  background-image: url(${(props) => props.img});
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  ${FaTwitter} {
    font-size: 100px;
  }
  @media screen and (min-width: 1001px) {
    height: 100%;
  }
`;

export const BirdWrapper = styled.div`
  padding: 1rem;
  width: min(100%, 22rem);
`;
