import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: auto;
    align-items: center;
    
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  position: absolute;
  left: 40px;
  top: 80px;
  font-size: 24px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: red;
    transition: 0.5s ease-in-out;
  }
`;