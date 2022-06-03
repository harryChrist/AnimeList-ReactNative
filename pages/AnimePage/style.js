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
  Marks:{
    flexDirection: "row",
    justifyContent: 'center',
  },
  Marks_icon:{
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  navTab: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    //backgroundColor: 'green'
  },
  navTab_buttons: {
    height: 30,
    width: 120,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 20,
    backgroundColor: '#181a1b',
  },
  navTab_text: {
    fontSize: 13,
    color: '#fff',
  },
  summary_content: {
    backgroundColor: '#222527',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    paddingTop: 20,
  },
  content_rating: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  content_rating_star: {
    color: "rgba(248,231,28,1)",
    fontSize: 20,
    marginRight: 5
  },
  content_rating_text: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 10,
  },
  content_itens: {
    flexDirection: "row",
    margin: 5,
  },
  content_itens_subtitle: {
    width: '25%',
    textAlign: 'right',
    color: '#fff',
  },
  content_itens_text: {
    width: '75%',
    textAlign: 'left',
    marginLeft: 20,
    color: '#b8b4b4'
  },
  content_titlesyn:{
    color: "#fff",
    marginLeft: 10,
    marginBottom: 10,
  },
  content_synopse: {
    color: "rgba(181,181,181,1)",
    marginLeft: 10,
  },
  trailer: {
    width: 180,
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  character_container: {
    width: '100%',
    height: 220,
    flex:1,
    backgroundColor: '#222527',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  character_tab: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
    marginTop: 10,
  },
  character_title: {
    fontSize: 18,
    color: '#ffff',
  },
});
//font-family:Aclonica