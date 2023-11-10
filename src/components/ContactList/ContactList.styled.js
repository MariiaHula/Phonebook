import styled from 'styled-components';

export const PeopleList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  max-width: 630px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const TextName = styled.p`
  font-weight: 500;
  text-align: start;
  width: 220px;
  font-size: 16px;
  margin: 5px;
  margin-right: 20px;
`;

export const TextNumber = styled.p`
  font-size: 16px;
  margin: 5px;
  margin-right: 20px;
  width: 140px;
`;

export const Button = styled.button`
  background-color: #fdc57b;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: rgba(214, 102, 214, 0.2) 0px 0px 0px 3px;

  &:hover {
    background-color: #e8630a;
  }
`;

export const TextNote = styled.p`
  margin: 20px 0;
  color: navy;
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  text-shadow: #fc0 1px 0 10px;
`;
