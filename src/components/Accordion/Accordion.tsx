import React, { useState, ReactElement } from 'react';

import { DropDownButton } from 'components/buttons/DropDownButton';
import * as S from './Accordion.style';

type AccordionProps = {
  isExpanded: boolean;
  render?: (toggle: () => void, isExpanded: boolean) => ReactElement;
  title?: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  isExpanded,
  render,
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
      <S.Accordion isExpanded={expanded}>{children}</S.Accordion>
    </>
  );
};
