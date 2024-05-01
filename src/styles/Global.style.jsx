import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-1: hsl(263, 55%, 52%); /* #733FC8 */
        --color-2: hsl(217, 19%, 35%); /* #48556A */
        --color-3: hsl(0, 0%, 100%); /* #FFFFFF */
        --color-4: hsl(219, 29%, 14%); /* #19202D */
        --color-5: hsl(217, 19%, 35%, 24.47%); /* 48556A opacity = 24.74% */
        --color-6: hsl(264, 82%, 70%); /* #A775F1 */
        --color-7: hsl(210, 46%, 95%); /* #ECF2F8 */

        /* Typography */
        --font-size-xs: 0.6875rem; /* 11px */
        --font-size-s: 0.8125rem; /* 13px */
        --font-size-base: 1.25rem; /* 20px */

        --font-weight-medium: 500;
        --font-weight-semi-bold: 600;

        --line-height-xs: 0.6875rem; /* 11px */
        --line-height-s: 0.8125rem; /* 13px */
        --line-height-base: 1.125rem; /* 18px */
        --line-height-normal: normal; 

        /* Spacing */
        --space-none: 0rem;
        --space-xs-1: 0.125rem;/* 2px */
        --space-xs-2: 0.25rem;/* 4px */
        --space-s-1: 0.375rem;/* 6px */
        --space-s-2: 1rem;/* 16px */
        --space-base: 1.0625rem; /* 17px */
        --space-m-1: 1.125rem;/* 18px */
        --space-m-2: 1.375rem;/* 22px */
        --space-l-1: 1.5rem;/* 24px */
        --space-l-2: 1.625rem;/* 26px */
        --space-xl-1: 2rem;/* 32px */
        --space-xl-2: 2.5rem;/* 40px */

        /* Borders */
        --border-radius-none: 0rem;
        --border-radius-soft: 0.5rem; /* 8px */
        --border-radius-round: 100%;
        --border-width-m: 0.125rem;/* 2px */

        /* Shadows */
        --shadow-1: 2.5rem 3.75rem 3.125rem -2.9375rem var(--color-5); /* 40px 60px 50px -47px */

        /* Opacity */
        --opacity-1: 0.5;
        --opacity-2: 0.7;
        --opacity-3: 1;
    }

    @font-face {
        font-family: "BarlowSemiCondensed";
        src: url("/fonts/BarlowSemiCondensed-Medium.ttf") format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: "BarlowSemiCondensed";
        src: url("/fonts/BarlowSemiCondensed-SemiBold.ttf") format("truetype");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
`;

export const ResetStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default spaces */
    * {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
    }

    /* Avoid text overflows */
    p {
        overflow-wrap: break-word;
    }

    /* Prevent font size inflation */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Make images easier to work with */
    img {
        max-width: 100%;
        display: block;
    }
`;

export const DefaultStyles = createGlobalStyle`
    body {
        font-family: "BarlowSemiCondensed";
        font-weight: var(--font-weight-medium);
    }

    .visually-hidden {

    }
`;
