import { styled, css } from "styled-components";
import { DesktopWidth } from "../constants/Breakpoints";

export const CardList = styled.div`
  display: grid;
  grid-template-areas:
    "DanielClifford"
    "JonathanWalters"
    "JeanetteHarmon"
    "PatrickAbrams"
    "KiraWhittle";
  row-gap: var(--space-l-1);

  @media (min-width: ${DesktopWidth}) {
    grid-template-areas:
      "DanielClifford DanielClifford JonathanWalters KiraWhittle"
      "JeanetteHarmon PatrickAbrams PatrickAbrams KiraWhittle";
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: var(--space-l-1);
    column-gap: var(--space-l-3);
  }
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
      background-repeat: no-repeat;
      background-position-x: calc(100% - var(--space-l-1));
      background-image: ${props.$hasQuoteImage
        ? "url('/images/bg-pattern-quotation.svg')"
        : "none"};
      background-size: 6.5rem 6.375rem; /* 104px 102px */ /* RRC check this */
    `}

  @media (min-width: ${DesktopWidth}) {
    gap: var(--space-m-1);
    ${css`
      background-position-x: calc(100% - var(--space-xl-3));
    `};
  }
`;

export const Title = styled.b`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semi-bold);
  line-height: var(--line-height-normal);
  margin-top: var(--space-xs-1);

  @media (min-width: ${DesktopWidth}) {
    margin-top: var(--space-none);
  }
`;

export const Description = styled.q`
  font-size: var(--font-size-s);
  line-height: var(--line-height-base);
  opacity: var(--opacity-2);

  @media (min-width: ${DesktopWidth}) {
    margin-top: var(--space-s-1);
  }
`;
