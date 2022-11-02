import styled from 'styled-components';

const buttonColor = ({ name }) => {
  switch (name) {
    case 'Good':
      return '#02f902';
    case 'Neutral':
      return '#8c8cff';
    case 'Bad':
      return '#e75555';
    default:
      return '#ffffff';
  }
};

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c0075;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 16px;
  width: 100px;
  height: 40px;


  &:hover,
  &:focus {
    box-shadow: inset 0 0 11px hsl(0deg 0% 100% / 80%), 0 0 20px hsl(0deg 0% 100% / 20%);
      color: ${buttonColor};
      border: 2px solid ${buttonColor};
`;
