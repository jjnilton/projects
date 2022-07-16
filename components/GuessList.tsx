import { FlatList, View } from 'react-native';
import styles from '../styles/styles';
import Guess from '../types/Guess';
import GuessListItem from './GuessListItem';

const GuessList = ({ data }: { data: Guess[]}) => {
    return (
        <View style={styles.guessListContainer}>
            <FlatList
                data={data}
                renderItem={({ item }: { item: Guess }) => <GuessListItem guess={item}></GuessListItem>}
                keyExtractor={item => item.count.toString()}
            ></FlatList>
        </View>
    );
}

export default GuessList;
