import styled from 'styled-components';

type AccordionProps = {
  expanded: boolean;
};

export const Accordion = styled.header<AccordionProps>`
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? '1500' : '0')}px;
  transition: max-height 0.5s;
  margin: 0;
`;

export const Content = styled.div<AccordionProps>`
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  transition: opacity 0.3s;
`;
