import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Guess from '../types/Guess';

const GameOverScreen = ({
    lastGuess, onResetGame
}: {
    lastGuess: Guess,
    onResetGame: () => void
}) => {
    return (
        <View style={styles.container}>
            <Header title="Game Over"></Header>
            <View style={styles.gameOverImageContainer}>
                <Image style={{width: 100, height: 100}}
                       source={require('../assets/dice.png')}>

                </Image>
            </View>
            <View style={styles.gameOverMsgContainer}>
                <Text style={styles.gameOverMsgText}>
                    <Text>It took </Text>
                    <Text style={{fontWeight: 'bold'}}>
                        {lastGuess.count}
                    </Text>
                    <Text> attempts to guess the number </Text>
                    <Text style={{fontWeight: 'bold'}}>
                        {lastGuess.number}
                    </Text>
                    <Text>.</Text>
                </Text>
            </View>
            <Button
                title="Start New Game"
                onPress={onResetGame}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'black',
        flex: 1,
        paddingHorizontal: 25,
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
});

export default GameOverScreen;
