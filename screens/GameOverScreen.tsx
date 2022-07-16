import { Button, Image, Text, View } from 'react-native';
import Header from '../components/Header';
import styles from '../styles/styles';
import Guess from '../types/Guess';

/* Game Over Screen  */
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
                <Text style={styles.gameOverMsgText}>It took
                    <Text style={{fontWeight: 'bold'}}> {lastGuess.count} </Text>
                    attempts to guess the number
                    <Text style={{fontWeight: 'bold'}}> {lastGuess.number}</Text>.
                </Text>
            </View>
            <Button
                title="Start New Game"
                onPress={onResetGame}>
            </Button>
        </View>
    );
}

export default GameOverScreen;
