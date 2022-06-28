import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    &*,   *::before,  *::after{
        box-sizing: inherit;
        padding: 0;
        margin: 0;
        font-family: 'Ubuntu', sans-serif;
    } 
    a{
        text-decoration: none;
    }
    ul{
        list-style-type: none;
    }

    input,
    textarea,
    button,
    select,
    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
`;
