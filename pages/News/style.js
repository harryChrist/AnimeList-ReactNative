import { StyleSheet } from "react-native";
import styled, {css} from 'styled-components/native';

/*navTab_buttons: {
    height: 30,
    width: 90,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: '#181a1b',
  }, */
export const ButtonsNav = styled.TouchableOpacity`
  height: 30px;
  width: 90px;
  margin: 2px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  borderWidth: 1px;
  border-style: solid;
  shadow-color: rgba(0,0,0,1);
  box-shadow: 3px 3px 5px rgba(0,0,0,1);
  font-size: 18px;
  background: ${props => props.second ? "gray" : '#181a1b'};
  background: #181a1b;
  ${props =>
    props.selected &&
    css`
    background: cornflowerblue;
    `}
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19,27,40,1)",
    alignItems: 'center',
    width:'100%',
  },
  conteiners: {
    width: '100%',
    height: 225,
    //backgroundColor: '#222527',
    marginBottom: 10,
  },
  conteiners_tab: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
    marginTop: 5,
  },
  conteiners_title: {
    fontSize: 18,
    marginTop: 6,
    textAlign: 'center',
    color: '#ffff',
  },
  navTab: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    //backgroundColor: 'green'
  },
  navTab_buttons: {
    height: 30,
    width: 90,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: '#181a1b',
  },
  animeItem: {
    height: '100%',
  },
  navTab_text: {
    fontSize: 10,
    color: '#fff',
  },
});

export default styles;
//font-family:Aclonica