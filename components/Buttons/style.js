import styled from 'styled-components/native';

export const SuperButton = styled.TouchableOpacity`
  height: 45px;
  width: 244px;
  marginTop: 25px;
  justify-content: center;
  alignItems: center;
  border-radius: 100px;
  minWidth: 88px;
  borderWidth: 1px;
  border-style: solid;
  shadow-color: rgba(0,0,0,1);
  box-shadow: 3px 3px 5px rgba(0,0,0,1);
  font-size: 18px;
  elevation: 5;
  background: ${props => props.second ? "rgba(230, 230, 230,0)" : 'rgba(47,6,124,1)'}
`