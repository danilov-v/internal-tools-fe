import styled from 'styled-components';

type ButtonProps = {
  color?: string;
};

type DropDownButtonProps = {
  expanded?: boolean;
};

type PlusButtonProps = {
  title?: string;
};

export const Button = styled.button<ButtonProps>`
  border: 1px solid;
  border-color: ${({ color }) => color || '#b3b3b3'};
  border-radius: 2px;
  min-height: 25px;
  display: inline-block;
  background-color: transparent;
  color: ${({ color }) => color || '#b3b3b3'};
  cursor: pointer;
  outline: none;
  transition: all 0.1s ease;
`;

export const DropDownButton = styled(Button)<DropDownButtonProps>`
  position: relative;
  padding-right: 15px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    right: 2px;
    width: 8px;
    height: 7px;
    background-color: ${({ color }) => color || '#b3b3b3'};
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    transform: ${({ expanded }) =>
      expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const PlusButton = styled.button<PlusButtonProps>`
  border: 2px solid ${({ color }) => color || '#b3b3b3'};
  border-radius: 50%;
  height: 18px;
  width: 18px;
  position: relative;
  background: transparent;
  cursor: pointer;
  margin-right: 5px;

  &::before {
    content: '\\FF0B';
    color: ${({ color }) => color || '#b3b3b3'};
    position: absolute;
    top: -1px;
    left: -1px;
  }
`;
