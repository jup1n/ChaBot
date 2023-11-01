import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main : {
        flex: 1,
        backgroundColor: '#343541',
        justifyContent: "center",
        alignItems: "center",
        gap: 35
    },

    title : {
        fontSize: 50,
        fontFamily: "Roboto",
        color: '#FFFFFF',
        paddingBottom: 100
    },

    input : {
        width: 345,
        height: 57,
        backgroundColor: '#40414F',
        borderRadius: 10,
        color: '#939393',
        paddingLeft: 15
    },

    button : {
        width: 273,
        height: 43,
        backgroundColor: '#8000FF',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },

    spaceBox : {
        gap : 9
    },

    subText : {
        color: '#FFFFFF',
        fontWeight: "bold"
    }
})