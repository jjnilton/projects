import { StyleSheet, Text, View } from 'react-native';
import Guess from '../types/Guess';

const GuessListItem = ({ guess }: { guess: Guess }) => {
    return (
        <View style={styles.guessListItem}>
            <Text style={styles.guessListItemTextCount}>#{guess.count}</Text>
            <Text style={styles.guessListItemTextId}>{guess.identifier}</Text>
            <Text style={styles.guessListItemTextGuess}>{guess.number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
});

export default GuessListItem;
