import { createGlobalStyle } from 'styled-components';

import { darken, transparentize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E62E4D;
        --red-light: ${transparentize(0.9, '#E62E4D')};

        --blue: #5429CC;
        --blue-light: #6933FF;

        --green: #33CC95;
        --green-light: ${transparentize(0.9, '#33CC95')};
        
        --background: #F0F2F5;
        --shape: #FFFFFF;
        
        --text-title: #363F5F;
        --text-body: #969CB3;
        
        --input-background: #E7E9EE;

        --border-color: #D7D7D7;
        --dark-border-color: ${darken(0.1, '#D7D7D7')}
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, inputs, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;