import styled from 'styled-components';
import { Link } from '@reach/router';

type HumburgerProps = {
  expanded: boolean;
};

const LINE_COLOR = '#616262';

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  z-index: 100;
  border-bottom: 2px solid ${LINE_COLOR};
  background: linear-gradient(90deg, #44494b 0%, #4c5153 25%, #4c5153 100%);

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    justify-content: initial;
  }
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const NavBar = styled.ul<HumburgerProps>`
  list-style-type: none;
  padding: 0;
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    display: block;
    flex: 1;
    margin-top: 0;
  }
`;

export const NavItem = styled.li`
  display: block;
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    display: inline-block;
    margin-left: 40px;
    margin-bottom: 0;
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
    color: #ffdc62;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -12px;
      left: calc(50% - 5px);
      width: 10px;
      height: 8px;
      background-color: #ffdc62;
      clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
  }
`;

export const Humburger = styled.div<HumburgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 45px;
  height: 35px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  div {
    height: 3px;
    background: #cccccc;
    border-radius: 2px;
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

export const UserRank = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Actions = styled.div`
  display: flex;
  border-left: 2px solid ${LINE_COLOR};
  margin-left: 20px;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const ActionIcon = styled.img`
  width: 15px;
  height: 15px;
`;
