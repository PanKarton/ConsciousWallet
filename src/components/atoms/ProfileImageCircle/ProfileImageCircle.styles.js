import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  .image {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 1000rem;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    &:hover {
      box-shadow: ${({ hasHoverShadow }) => (hasHoverShadow ? 'inset 0 0 0 1000px rgba(0, 0, 0, 0.1)' : 'none')};
    }
  }
`;
