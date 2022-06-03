import { StyleSheet } from "react-native";

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