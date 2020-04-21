import React from 'react';
import { Button } from 'components/buttons/Button';
import { Row } from 'components/layout';

export const PersonnelDelete: React.FC = () => {
  return (
    <Row justify="center" mt={24}>
      <Button color="secondary" onClick={() => console.log('Удалить солдата')}>
        Удалить солдата
      </Button>
    </Row>
  );
};
