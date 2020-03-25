import styled from 'styled-components';

type DropDownButtonProps = {
  expanded?: boolean;
};

export const Button = styled.button`
  border: 1px solid #b3b3b3;
  border-radius: 2px;
  display: inline-block;
  background-color: transparent;
  color: #b3b3b3;
  cursor: pointer;
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
    background-color: #b3b3b3;
    clip-path: polygon(50% 100%, 0 0, 100% 0);
    transform: ${({ expanded }) =>
      expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;
