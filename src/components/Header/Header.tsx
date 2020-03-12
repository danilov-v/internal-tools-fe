import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react-lite';

import * as S from './Header.style';

type HeaderProps = {
  test: string;
};

const Header: React.FC<HeaderProps> = ({ test }) => {
  const counterStore = useLocalStore(() => ({
    counter: 0,
    increment() {
      counterStore.counter += 1;
    },
  }));

  return useObserver(() => (
    <S.Header>
      There will be header. <br />
      Test params - {test}! <br />
      Test store value - {counterStore.counter} <br />
      <button type="button" onClick={counterStore.increment}>
        Increment
      </button>
    </S.Header>
  ));
};

export { Header };
