import { Text, View } from 'react-native';
import styles from '../styles/styles';
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

export default GuessListItem;
