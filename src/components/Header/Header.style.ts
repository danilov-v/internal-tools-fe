import styled from 'styled-components';
import { Link } from '@reach/router';

type HumburgerProps = {
  expanded: boolean;
};

export const Header = styled.header`
  font-size: 1.2rem;
  position: fixed;
  left: 4vw;
  top: 0;
  width: 92vw;
  z-index: 100;
  border-bottom: 2px solid #616262ff;
  padding-top: 1em;
  min-height: 65px;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 0;
    align-items: flex-end;
    padding-bottom: 1em;
  }
`;

export const NavBar = styled.ul`
  list-style-type: none;
  display: ${({ expanded }: HumburgerProps) => (expanded ? 'block' : 'none')};
  margin-top: 3rem;
  padding: 0;

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
      margin-top: 1rem;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #ccccccff;
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

export const Humburger = styled.div`
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
    background: #ccccccff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform-origin: left center;
    transition: 0.25s ease-in-out;
  }

  & div:nth-child(1) {
    transform: ${({ expanded }: HumburgerProps) =>
      expanded ? 'rotate(45deg)' : 'rotate(0deg)'};
  }
  & div:nth-child(2) {
    opacity: ${({ expanded }: HumburgerProps) => (expanded ? 0 : 1)};
  }
  & div:nth-child(3) {
    transform: ${({ expanded }: HumburgerProps) =>
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
