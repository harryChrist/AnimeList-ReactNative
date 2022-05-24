import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19,27,40,1)",
    alignItems: 'center',
    alignContent: 'center',
  },
  animeList: {
    display: 'flex',
    flexGrow: 1,
  },
  Loading: {
    fontSize: 24,
    alignSelf: 'center',
    color: '#fff',
    position: 'absolute',
    justifyContent: 'center',
  },
  inputStyle: {
    color: "#fff",
    marginLeft: 16,
    paddingRight: 5,
    fontSize: 16,
    flex: 1,
    lineHeight: 16,
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    paddingTop: 14,
    paddingBottom: 8,
  },
  back: {
    alignItems: 'center',
    margin: 50,
  },
  list_content:{
    alignContent: 'center',
  },
  flat_list:{
    padding: 10,
    marginBottom: 10,
  },
  animeItem: {
    borderColor: '#fff',
    margin: 10,
    borderColor: "#CCC",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    //overflow: "hidden"
  },
});

export default styles;
//font-family:Aclonica