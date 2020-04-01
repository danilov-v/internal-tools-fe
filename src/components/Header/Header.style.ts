import styled from 'styled-components';
import { Link } from '@reach/router';

type HumburgerProps = {
  expanded: boolean;
};

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 92%;
  min-height: 65px;
  font-size: 16px;
  border-bottom: 2px solid #616262;
  padding-bottom: 10px;
  background: linear-gradient(90deg, #44494b 0%, #4c5153 25%, #4c5153 100%);

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-end;
  }
`;

export const UserLogo = styled.div`
  cursor: pointer;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 20px;
  }
`;

export const NavBar = styled.ul<HumburgerProps>`
  list-style-type: none;
  padding: 0;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    margin: 0;
    display: block;
  }
`;

export const NavItem = styled.li`
  text-align: center;
  margin-left: 40px;
  display: inline-block;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 0;

    &:not(:first-child) {
      margin-top: 20px;
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
    color: #ffdc62;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -12px;
      left: 40%;
      width: 9px;
      height: 8px;
      background-color: #ffdc62;
      clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
  }
`;

export const Humburger = styled.div<HumburgerProps>`
  position: absolute;
  top: 20px;
  right: 0;
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

export const UserAvatar = styled.div`
  position: absolute;
  right: 70px;
  top: 20px;

  @media screen and (min-width: 768px) {
    right: 0;
    top: 25px;
  }
`;
