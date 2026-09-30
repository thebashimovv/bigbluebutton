import styled from 'styled-components';
import { smallOnly } from '/imports/ui/stylesheets/styled-components/breakpoints';
import { smPaddingX, smPaddingY, barsPadding } from '/imports/ui/stylesheets/styled-components/general';
import { colorWhite, colorBackground } from '/imports/ui/stylesheets/styled-components/palette';
import Button from '/imports/ui/components/common/button/component';
import ButtonStyled from '/imports/ui/components/common/button/styles';

const ActionsBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ActionsBarWrapper = styled.section`
  flex: 1;
  padding: ${barsPadding};
  background-color: ${colorBackground};
  position: relative;
  order: 3;

  /* Bilermen: "on" states (mic, screenshare, raised hand...) are green,
     idle buttons are lighter navy circles. Scoped to the bar only; menus open
     in portals and keep the global button colors. Opaque colors (not white
     alpha) so DarkReader's dark mode keeps them visible. */
  --btn-primary-bg: #01875C;
  --btn-primary-hover-bg: #016E4B;
  --btn-primary-active-bg: #015C3F;
  --btn-primary-border: rgba(1, 135, 92, 0.5);
  --btn-default-bg: #2A5379;
  --btn-default-color: #E4EDF4;
  --btn-default-border: transparent;

  /* Stock default circle buttons have no hover state; make it visible on the dark bar. */
  ${ButtonStyled.ButtonSpan} {
    transition: background-color .15s ease-out;
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }
  .buttonWrapper:not([aria-disabled="true"]):hover > ${ButtonStyled.ButtonSpan} {
    background-color: #36628C;
  }
`;

const Left = styled.div`
  display: inherit;
  flex: 0;
  > *:not(span) {
    @media ${smallOnly} {
      margin: 0 ${smPaddingY};
    }
  }
  @media ${smallOnly} {
    bottom: ${smPaddingX};
    left: ${smPaddingX};
    right: auto;
    [dir="rtl"] & {
      left: auto;
      right: ${smPaddingX};
    }
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${smPaddingX};
  flex: 0 1 auto;
  margin: 0 auto;
  justify-content: center;
  padding: 0 .5rem;
  border-radius: 999px;
  background-color: #0F3150;
  border: 1px solid #25496B;
  > *:not(span):not(:last-child) {
    @media ${smallOnly} {
      margin: 0 ${smPaddingY};
    }
  }
  @media ${smallOnly} {
    padding: 0 .25rem;
    gap: .25rem;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  [dir="rtl"] & {
    right: auto;
    left: ${smPaddingX};
  }
  @media ${smallOnly} {
    right: 0;
    left: 0;
    display: contents;
  }
  > *:not(span) {
    @media ${smallOnly} {
      margin: 0 ${smPaddingY};
    }
  }
`;

const RaiseHandButton = styled(Button)`
  ${({ ghost }) => ghost && `
    & > span {
      box-shadow: none;
      background-color: transparent !important;
      border-color: ${colorWhite} !important;
    }
  `}
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  > * {
    margin: 8px;
  }
`;

const ReactionsDropdown = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0.2em 0.2em 0.2em 0.2em;
  text-align: center;
  max-height: 270px;
  width: 270px;
  em-emoji {
    cursor: pointer;
  }
`;

const Separator = styled.div`
  height: 2.5rem;
  width: 0;
  border: 1px solid ${colorWhite};
  align-self: center;
  opacity: .2;
`;

const Gap = styled.div`
  display: flex;
  gap: .5rem;
`;

export default {
  ActionsBar,
  Left,
  Center,
  Right,
  RaiseHandButton,
  ButtonContainer,
  ReactionsDropdown,
  Wrapper,
  ActionsBarWrapper,
  Gap,
  Separator,
};
