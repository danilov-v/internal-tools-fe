import styled from 'styled-components';

type AccordionProps = {
  isExpanded: boolean;
};

export const Accordion = styled.div<AccordionProps>`
  max-height: ${({ isExpanded }) => (isExpanded ? 1500 : 0)}px;
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.2s ease, opacity 0.3s ease;
`;
