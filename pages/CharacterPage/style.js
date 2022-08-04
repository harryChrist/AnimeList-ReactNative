import { StyleSheet } from "react-native";
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19,27,40,1)",
  },
  background: {
    width: '100%',
    position: 'absolute',
    height: 200,
    opacity: 0.5,
  },
  title: {
    color:'white',
    fontSize:18,
    textAlign: 'center',
  },
  background_image: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  summary:{
    flex: 1,
    width: '90%',
    margin: '5%',
    marginTop: 60,
    height: '100%',
    //backgroundColor: 'red',
  },
  summaryImage: {
    width: '45%',
    height: 250,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    //backgroundColor: 'blue',
  },
  summaryImage_img: {
    width: '100%',
    borderRadius: 10,
    height: '100%'
  },
  summary_content: {
    backgroundColor: '#222527',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
  },
  content_title: {
    color:"white",
    marginLeft: 10,
    marginBottom:5,
  },
  content_synopse: {
    color: "rgba(181,181,181,1)",
    marginLeft: 10,
  },
  character_container: {
    width: '100%',
    height: 220,
    flex:1,
    marginBottom: 10,
    marginTop: 10,
  },
  character_tab: {
    width: '90%',
    alignItems:'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
    marginTop: 10,
  },
  character_title: {
    fontSize: 18,
    color: '#ffff',
  },
  character_list: {
    backgroundColor: '#222527',
  },
});
//font-family:Aclonica