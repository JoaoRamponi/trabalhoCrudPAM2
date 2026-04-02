import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#ffffff',
    },

    header:{
        backgroundColor: '#9b59b6',
        height: 70,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 8,
    },

    menu:{
        position: 'absolute',
        left: 20,
        top: 25,
    },

    logo:{
        width: 140,
        height: 35,
        alignSelf: "center",
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks:{
        flexDirection: 'row',
        marginTop: 40,
        marginLeft: 20,
    },

    greeting:{
        fontSize: 18,
        color: '#000000',
        fontFamily: fonts.text,
    },

    userName:{
        fontSize: 22,
        color: '#000000',
        fontFamily: fonts.text,
        fontWeight: 'bold',
    },

    image:{
        width: 60,
        height: 60,
        borderRadius: 30
    },

    lenghtText:{
        color: '#9b59b6', 
        fontSize: 32, 
        fontFamily: fonts.text,
        fontWeight: 'bold'
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#ffffff'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 18,
        marginBottom: 10,
        color: '#000000'
    },

    logout:{
        position: 'absolute',
        right: 20,
        top: 25,
        color: '#ffffff',
    },

    containerBox:{
        width: '90%',
        alignSelf: "center",
        marginBottom: 20,
    },

    box:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 20,
        borderRadius: 15,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },

    rText:{
        fontSize: 16,
        color: '#000000',
        fontFamily: fonts.text,
    },

    textFooter:{
        padding: 12, 
        color: '#ffffff',
        backgroundColor: '#9b59b6',
        textAlign: 'center',
        fontSize: 14,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered:{
        alignSelf: 'center',
    },

    textos:{
        alignItems: 'flex-end',
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 25,
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 15,
        elevation: 4,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 14,
        color: '#000000',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    },

    textProgressContainer:{
        alignSelf: "center",
        marginRight: 20,
    },

    numberInside:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: '#9b59b6',
        fontWeight: 'bold'
    },

    boxContainer:{
        marginRight: 15,
        width: 200,
        marginLeft: 10,
    },

    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#9b59b6',
        borderRadius: 10,
        overflow: 'hidden'
    },

    headerCell: {
        width: 100,
        padding: 12,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },

    griditem: {
        flexDirection: 'row',
    },

    cell: {
        width: 100,
        padding: 12,
        textAlign: 'center',
        color: '#000000',
        backgroundColor: '#ffffff',
    },

    rowEven: {
        backgroundColor: '#f9f9f9'
    },

    rowOdd: {
        backgroundColor: '#ffffff'
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 100,
        padding: 10
    }

});