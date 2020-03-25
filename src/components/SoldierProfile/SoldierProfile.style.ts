import styled from 'styled-components';
import { DropDownButton, Button } from 'components/Button';

type SoldierProps = {
  marginTop?: string;
  marginBottom?: string;
};

type ColoredSectionProps = {
  color?: string;
};

export const SoldierProfile = styled.div`
  max-width: 500px;
  margin: 60px auto;
  color: #f2f2f2;
`;

export const Section = styled.div<SoldierProps>`
  margin: 30px 0;
  padding-bottom: 20px;
  border-bottom: 2px solid #616262ff;
`;

export const SoldierLastName = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
`;

export const SoldierFirstName = styled.h3`
  color: #cccccc;
  font-size: 20px;
  font-weight: normal;
  margin-top: 7px;
`;

export const SoldierRang = styled.h3`
  color: #8f8f8f;
  font-size: 20px;
  font-weight: normal;
  margin-top: 7px;
  margin-bottom: 25px;
`;

export const SoldierPhoto = styled.div`
  width: 80px;
  height: 100px;
  border: 1px solid #616262ff;
  float: right;

  img {
    max-width: 100%;
  }
`;

export const SoldierInfoItem = styled.div<SoldierProps>`
  display: grid;
  grid-template-columns: 250px 250px;
  margin-bottom: 10px;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  color: #cccccc;
`;

export const FieldName = styled.div``;

export const FieldValue = styled.div`
  text-align: right;
`;

export const EditButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

export const SubText = styled.p`
  display: inline-block;
  font-style: italic;
  font-size: 12px;
  opacity: 0.5;
  margin-bottom: 10px;
`;

export const SoldierColoredSection = styled.div<ColoredSectionProps>`
  color: ${({ color }) => color || 'inherits'};
  font-size: 16px;
  margin-bottom: 25px;

  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const PropmsArchiveBtn = styled(DropDownButton).attrs(props => ({
  color: props.color || '#f2f2f2',
}))`
  display: block;
  border: none;
  color: ${({ color }) => color};
  font-size: 18px;
  font-weight: bold;
  padding-left: 0;
  margin-bottom: 8px;
`;
