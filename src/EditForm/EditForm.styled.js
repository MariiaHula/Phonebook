import styled from 'styled-components';
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const Label = styled.label`
  margin: 10px 0;
  font-weight: bold;
  color: #27296d;
  font-size: 20px;
`;

export const Input = styled.input`
  text-decoration: none;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const ButtonForm = styled.button`
  margin: 22px 0 0 0;
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
  max-width: 100px;

  &:hover {
    background-color: #27296d;
  }
`;
export const Text = styled.p`
  margin-top: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;
