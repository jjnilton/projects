import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 25,
    },
    header: {
        borderWidth: 2,
        borderColor: 'white',
        margin: 15,
        padding: 10,
        textAlign: 'center',
        width: '50%',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    enterNumber: {
        backgroundColor: '#111',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        width: '100%',
    },
    enterNumberLabel: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    enterNumberInput: {
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: 'white',
        color: 'white',
        fontSize: 35,
        margin: 10,
        textAlign: 'center',
        width: 50,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 5,
    },
    actionButton: {
        width: '45%',
    },
    lastGuessContainer: {
        borderColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 15,
        paddingVertical: 15,
        textAlign: 'center',
        width: '100%',
    },
    lastGuess: {
        color: 'white',
        fontSize: 36,
        textAlign: 'center',
    },
    guessListContainer: {
        marginTop: 10,
        width: '100%',
    },
    guessListItem: {
        backgroundColor: '#111',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        width: '100%',
    },
    guessListItemTextCount: {
        color: 'white',
        flexBasis: '33.3%',
    },
    guessListItemTextId: {
        color: 'white',
        flexBasis: '33.3%',
        textAlign: 'center',
    },
    guessListItemTextGuess: {
        color: 'white',
        flexBasis: '33.3%',
        fontWeight: 'bold',
        textAlign: 'right',
    },
    gameOverImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        borderRadius: 8,
    },
    gameOverMsgContainer: {
        backgroundColor: "#111",
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
    },
    gameOverMsgText: {
        color: 'white',
    },
    alertModalBackdrop: {
        backgroundColor: 'black',
        flex: 1,
        height: '100%',
        opacity: 0.75,
        position: 'absolute',
        width: '100%',
    },
    alertModalContainer: {
        backgroundColor: "#222",
        borderRadius: 10,
        marginHorizontal: '10%',
        marginVertical: '50%',
        padding: 20,
    },
    alertModalTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
    alertModalContent: {
        color: 'white',
        marginVertical: 10,
    }
});

export default styles;
