import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 1000rem;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
