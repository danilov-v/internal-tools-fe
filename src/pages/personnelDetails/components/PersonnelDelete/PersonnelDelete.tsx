import React from 'react';
import { Button } from 'components/buttons/Button';
import { Row } from 'components/layout';

type PersonnelDeleteType = {
  onClick: () => void;
};

export const PersonnelDelete: React.FC<PersonnelDeleteType> = ({ onClick }) => {
  return (
    <Row justify="center" mt={24}>
      <Button color="secondary" onClick={onClick}>
        Удалить солдата
      </Button>
    </Row>
  );
};
