import { styled, css } from "styled-components";

export const CardList = styled.div`
  display: grid;
  grid-template-areas:
    "DanielClifford"
    "JonathanWalters"
    "JeanetteHarmon"
    "PatrickAbrams"
    "KiraWhittle";
  row-gap: var(--space-l-1);
`;

export const Card = styled.section`
  padding: var(--space-l-2) var(--space-xl-1) var(--space-xl-1)
    var(--space-xl-1);
  display: flex;
  flex-direction: column;
  gap: var(--space-s-2);
  border-radius: var(--border-radius-soft);
  box-shadow: var(--shadow-1);
  ${(props) =>
    css`
      grid-area: ${props.$gridArea};
      background-color: ${props.$backgroundColor};
      color: ${props.$isTextLightMode ? "var(--color-3)" : "var(--color-2)"};
      background-image: ${props.$hasQuoteImage
        ? "url('/images/bg-pattern-quotationn.svg')"
        : "none"}; /* Work on this */
    `}
`;

export const Title = styled.b`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semi-bold);
  line-height: var(--line-height-normal);
`;

export const Description = styled.q`
  font-size: var(--font-size-s);
  line-height: var(--line-height-base);
  opacity: var(--opacity-2);
`;
