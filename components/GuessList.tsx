import { FlatList, StyleSheet, View } from 'react-native';
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

const styles = StyleSheet.create({
    guessListContainer: {
        marginTop: 10,
        width: '100%',
        flex: 1,
    }
});

export default GuessList;
