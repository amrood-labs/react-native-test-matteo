import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    textStyle: {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '600',
        letterSpacing: 0.035,
    },
    buttonStyle: {
        backgroundColor: '#FFA978',
        borderRadius: 8,
        marginTop: 16,
    },
    btnTitle: {
        color: 'white',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '600',
        letterSpacing: 0.005
    },
    innerContainer: {
        margin: 16
    },
    cardView: {
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: .5,
        marginTop: 16,
        padding: 10,
        borderColor: '#CDCDCD',
        flexDirection: 'row'
    },
    cardInerView: { marginLeft: 7 },
    cardTextStyle: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '500',
        letterSpacing: 0.025,
        color: '#4A4A4A'
    },
    cardText: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '500',
        letterSpacing: 0.025,
        color: '#C2C2C2'
    },
    imageStyle: {
        tintColor: '#C2C2C290',
        height: 32,
        width: 32
    },
    searchText: {
        marginTop: 48
    },
    messageContainer: {
        backgroundColor: '#EAFFC9',
        marginTop: 16,
        padding: 16,
        borderRadius: 8
    },
    messageView: {
        flexDirection: 'row'
    },
    messageTextView: {
        width: '65%'
    },
    messageImageStyle: {
        height: 120,
        width: 120
    },
    messageHeading: {
        color: '#4A4A4A',
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '600',
        letterSpacing: 0.025
    },
    messageText: {
        color: '#7D7D7D',
        marginTop: 10,
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '500'
    },
    messageBtnView: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    messageNotBtn: {
        backgroundColor: '#EAFFC9',
        borderRadius: 8,
        marginTop: 16,
        marginRight: 10,
    },
    messageNotBtnText: {
        color: '#B4EDA0',
        fontSize: 12,
        lineHeight: 17,
        fontWeight: '600',
        textAlign: 'center'
    },
    messageBtnText: {
        color: '#FFFFFF',
        fontSize: 12,
        lineHeight: 17,
        fontWeight: '600',
        textAlign: 'center',
        padding: 10
    },
    messageBtn: {
        backgroundColor: '#B4EDA0',
        borderRadius: 8,
        marginTop: 16,
    },
    searchContainer: {
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        margin: 0,
        marginTop: 10,
        padding: 0,
        borderColor: '#CDCDCD',
        borderTopColor: '#CDCDCD',
        borderBottomColor: '#CDCDCD'
    }
});

export default styles;