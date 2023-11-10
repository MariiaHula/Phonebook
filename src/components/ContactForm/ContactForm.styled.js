import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  margin-right: 30px;
  font-weight: 500;
`;

export const Input = styled.input`
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Button = styled.button`
  margin: 20px 0 0 0;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  height: 40px;
  background-color: #a393eb;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #27296d;
  }
`;
export const Text = styled.p`
  margin-top: 5px;
`;
