import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const AvatarImage = styled.img`
  width: 35px;
  height: 35px;
  display: inline-block;
  max-width: 100%;
`;

export const AvatarCaption = styled.div`
  display: inline-block;
  color: #cccccc;
  margin-left: 5px;

  span {
    position: absolute;
    bottom: 20px;
    font-size: 10px;
    color: #727374;
  }
`;
