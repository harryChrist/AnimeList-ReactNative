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
    marginTop: 50,
    alignSelf: 'center',
    color: '#fff',
    position: 'absolute',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
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
    width: '80%',
    margin: 50,
  },
  list_content:{
    alignContent: 'center',
  },
  flat_list:{
    padding: 10,
    marginBottom: 45,
  },
  animeItem: {
    marginRight: 5,
        marginLeft: 5,
        marginBottom: 10,
    borderColor: '#fff',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    //overflow: "hidden"
  },
});

export default styles;
//font-family:Aclonica