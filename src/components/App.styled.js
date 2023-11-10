import { TextNote } from 'components/ContactList/ContactList.styled';
import styled from 'styled-components';
import img from '../../src/images/5589241.jpg';
import { BsFillPhoneVibrateFill } from 'react-icons/bs';

export const Wrapper = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px 40px;
  display: flex;
  min-height: 100vh;
`;
export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #27296d;
  margin: 10px 0;
`;
export const SecondTitle = styled.h2`
  color: #27296d;
  margin: 20px 0;
`;

export const CenteredTextWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenteredTextNote = styled(TextNote)`
  font-size: 32px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const BsFillPhoneIcon = styled(BsFillPhoneVibrateFill)`
  font-size: 40px;
  color: #27296d;
  margin: 10px 10px 10px 0;
  box-shadow: rgba(214, 102, 214, 0.1) 0px 0px 0px 4px;
  border-radius: 20%;
`;
