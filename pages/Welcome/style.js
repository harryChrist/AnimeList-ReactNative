import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  backgroundColor: rgba(19,27,40,1);
  justify-content: center;
  align-items: center;
`;

export const SupButton = styled.TouchableOpacity`
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
  background: ${props => props.second ? "rgba(230, 230, 230,0)" : 'rgba(47,6,124,1)'};
`
export const Imagem = styled.Image`
  width: 244px;
  height: 236px;
`
export const Texto = styled.Text`
  fontSize: ${props => props.title ? 30 : 18}px;
  color: white;
`
//font-family:Aclonica