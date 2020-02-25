import React from 'react';
import styled from 'styled-components';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import { Link } from "@reach/router"

type HeaderProps = {
  test: string,
}

const StyledHeader = styled.header`
    color: #000;
  `;

export const Header = ({ test }: HeaderProps) => {
  const counterStore = useLocalStore(() => ({
    counter: 0,
    inc() {
      counterStore.counter++;
    }
  }));

  return useObserver(() => (
    <StyledHeader>
      There will be header. <br />
      Test params - {test}! <br />
      Test store value - {counterStore.counter} <br />
      < button onClick={counterStore.inc} > Increment</button >

      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
    </StyledHeader >
  ));
}