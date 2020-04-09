import styled from 'styled-components';

export const RankWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const RankImage = styled.img`
  width: 35px;
  height: 35px;
`;

export const RankCaption = styled.div`
  display: flex;
  flex-direction: column;
  color: #cccccc;
  margin-left: 5px;

  span {
    font-size: 10px;
    color: #727374;
  }
`;
