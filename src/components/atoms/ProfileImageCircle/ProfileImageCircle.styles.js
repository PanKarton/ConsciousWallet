import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  position: relative;
  .image {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 1000rem;
    background-image: url(${({ imgUrl }) => imgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .hover-shadow {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    border-radius: 1000rem;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
  }
  &:hover > .hover-shadow {
    opacity: 1;
  }
`;
