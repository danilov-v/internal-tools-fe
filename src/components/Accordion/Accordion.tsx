import React, { useState } from 'react';
import * as S from './Accordion.style';

type AccordionProps = {
  render(toogle: Function, isExpanded: boolean): void;
  isExpanded: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  render,
  isExpanded,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const toggleExpanded = (): void => setExpanded(!expanded);

  return (
    <>
      {render(toggleExpanded, expanded)}
      <S.Accordion expanded={expanded}>
        <S.Content expanded={expanded}>{children}</S.Content>
      </S.Accordion>
    </>
  );
};
