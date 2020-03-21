import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  max-width: 100%;
`;

export const AvatarCaption = styled.div`
  font-size: 1.2rem;
  color: #ccccccff;
  margin-left: 5px;

  span {
    position: absolute;
    bottom: 1.6rem;
    font-size: 0.8rem;
    color: #727374ff;
  }
`;
