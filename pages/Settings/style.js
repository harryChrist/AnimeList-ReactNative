import { StyleSheet} from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19,27,40,1)",
  },
  background:{
    width: '100%',
    top: 55,
    height: 300,
    opacity: 0.6,
    position: 'absolute',
  },
  perfil:{
  },
  perfil_borda:{
    width:180,
    height:180,
    marginTop: 20,
    alignSelf: 'center',
    borderColor:'white',
    borderWidth:1,
    borderRadius: 200,
  },
  perfil_icon:{
    position: 'absolute',
    alignSelf: 'flex-end',
    marginRight:'5%',
    marginTop:'5%'
  },
  perfil_image:{
    width:'100%',
    height:'100%',
    borderWidth:1,
    borderRadius:200,
  },
  perfiL_name:{
    color:'white',
    alignSelf: 'center',
    margin: 10,
    fontSize:20,
  },
  settings:{
    flex:1,
    borderWidth:1,
    borderTopRightRadius: 50,
    borderTopStartRadius: 50,
    backgroundColor:'#222527',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  favorites:{
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
  },
  favorites_container:{
    alignItems: 'center',
    width: '15%',
    marginLeft: 15,
    marginRight: 15,
  },
  favorites_title:{
    color:'white',
    fontSize:18,
  },
  favorites_subtitle:{
    color:'white',
    fontSize: 12,
  },
  containers_change:{
    flexDirection: 'row',
    width: '100%',
    marginLeft: '5%',
    marginRight: '5%',
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  containers_change_icon:{
    alignSelf: 'center',
    width: '10%',
  },
  containers_change_title:{
    width:'60%',
    color:'white',
    //textAlign: 'center',
    paddingLeft: 25,
    alignSelf: 'center',
    fontSize: 20,
  }
});

export default styles;