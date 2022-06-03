import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "#CCC",
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        //overflow: "hidden"
    },
    image: {
        position: "absolute",
        height: '100%',
        width: '100%'
    },
    rect: {
        top: 152,
        width: '100%',
        height: 29,
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.6)"
    },
    titulo: {
        //fontFamily: "roboto-regular",
        color: "white",
        fontSize: 11,
        textAlign: "center",
        alignSelf: 'center',
        width: '90%',
    },
    group: {
        width: 130,
        height: 180,
    },
    imageStack: {
        marginTop: '5%',
        width: '75%',
        height: '75%',
        alignSelf: 'center',
    },
    background: {
        position: "absolute",
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        opacity: 0.6,
    },
});

export const styled = StyleSheet.create({
    container: {
        borderColor: "#CCC",
        shadowColor: "#000",
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
        elevation: 3,
        //overflow: "hidden"
    },
    conteiners: {
        backgroundColor: 'black',
        width: 120,
        height: '100%'
    },
    imageStack: {
        marginTop: '5%',
        width: '75%',
        height: '75%',
        alignSelf: 'center',
    },
    background: {
        position: "absolute",
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        opacity: 0.6,
    },
    image: {
        position: "absolute",
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    titulo: {
        //fontFamily: "roboto-regular",
        color: "white",
        fontSize: 11,
        textAlign: "center",
    },
})