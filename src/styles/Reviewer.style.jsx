import { styled, css } from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-areas:
    "area-image area-name"
    "area-image area-status";
  grid-template-columns: 1.75rem auto;
  grid-column-gap: var(--space-base);
  grid-row-gap: var(--space-xs-2);
`;

export const Image = styled.img`
  grid-area: area-image;
  border-radius: var(--border-radius-round);
  width: 1.75rem; /* 28px */
  height: 1.75rem; /* 28px */
  ${(props) =>
    css`
      border: ${props.$hasImageStroke
        ? `var(--border-width-m) solid ${props.$imageStrokeColor}`
        : "none"};
    `}
`;

/* RRC: Check this */
// ${(props) => {
//     css`
//       border: ${props.$hasImageStroke
//         ? "var(--border-width-m) solid var(--color-6)"
//         : "none"};
//     `
//   }}

// ${(props) => {
//     if (props.$hasImageStroke) {
//       css`
//         outline: var(--border-width-m) solid var(--color-6);
//       `;
//     }
//   }}

export const Name = styled.span`
  grid-area: area-name;
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
`;

export const Status = styled.span`
  grid-area: area-status;
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  opacity: var(--opacity-1);
`;
