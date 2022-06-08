import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(19,27,40,1)",
        alignItems: 'center',
    },
    text:{
        color:'white',
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
      flat_list:{
        padding: 10,
        marginBottom: 45,
      },
});

export default styles;