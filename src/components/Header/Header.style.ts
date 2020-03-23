import styled from 'styled-components';
import { Link } from '@reach/router';

type HumburgerProps = {
  expanded: boolean;
};

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 4vw;
  z-index: 100;
  width: 92vw;
  min-height: 65px;
  padding-top: 1em;
  font-size: 1.2rem;
  border-bottom: 2px solid #616262ff;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 0;
    align-items: flex-end;
    padding-bottom: 1em;
  }
`;

export const NavBar = styled.ul<HumburgerProps>`
  list-style-type: none;
  padding: 0;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
  }
`;

export const NavItem = styled.li`
  text-align: center;
  margin-left: 2.2rem;

  @media screen and (max-width: 768px) {
    margin: 0;

    &:not(:first-child) {
      margin-top: 1.2rem;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #ffdc6282;
  }
  &[state='active'] {
    color: #ffdc62ff;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -1rem;
      left: 40%;
      width: 12px;
      height: 12px;
      background-color: #ffdc62ff;
      clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
  }
`;

export const Humburger = styled.div<HumburgerProps>`
  position: absolute;
  top: 1em;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  div {
    height: 0.25rem;
    background: #cccccc;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform-origin: left center;
    transition: 0.25s ease-in-out;
  }

  & div:nth-child(1) {
    transform: ${({ expanded }) =>
      expanded ? 'rotate(45deg)' : 'rotate(0deg)'};
  }
  & div:nth-child(2) {
    opacity: ${({ expanded }) => (expanded ? 0 : 1)};
  }
  & div:nth-child(3) {
    transform: ${({ expanded }) =>
      expanded ? 'rotate(-45deg)' : 'rotate(0deg)'};
  }
`;

export const UserAvatar = styled.div`
  position: absolute;
  top: 1.6em;
  right: calc(100vw - 260px);

  @media screen and (min-width: 768px) {
    right: 0;
  }
`;
