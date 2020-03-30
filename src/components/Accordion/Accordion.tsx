import React, { useState, ReactElement } from 'react';
import { DropDownButton } from 'components/Button';

import * as S from './Accordion.style';

type AccordionProps = {
  render?: (toogle: Function, isExpanded: boolean) => ReactElement;
  title?: string;
  isExpanded: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  render,
  isExpanded,
  title,
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const toggleExpanded = (): void => setExpanded(!expanded);

  return (
    <>
      {render ? (
        render(toggleExpanded, expanded)
      ) : (
        <DropDownButton onClick={toggleExpanded} expanded={expanded}>
          {title}
        </DropDownButton>
      )}
      <S.Accordion expanded={expanded}>{children}</S.Accordion>
    </>
  );
};
