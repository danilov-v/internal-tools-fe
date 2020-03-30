import styled from 'styled-components';

type AccordionProps = {
  expanded: boolean;
};

export const Accordion = styled.div<AccordionProps>`
  overflow: hidden;
  max-height: ${({ expanded }) => (expanded ? '1500' : '0')}px;
  opacity: ${({ expanded }) => (expanded ? '1' : '0')};
  transition: max-height 0.2s ease, opacity 0.3s ease;
  margin: 0;
`;
