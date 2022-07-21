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

export const Initials = styled.div`
  aspect-ratio: 1;
  border-radius: 1000rem;
  overflow: hidden;
  .initials-span {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.xxm};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ backgroundColor }) => `hsl(${backgroundColor}, 100%, 25%)`};
  }
`;
