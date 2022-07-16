import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Actions from '../components/Actions';
import AlertModal from '../components/AlertModal';
import GuessList from '../components/GuessList';
import Header from '../components/Header';
import styles from '../styles/styles';
import AlertModalData from '../types/AlertModalData';
import Guess from '../types/Guess';

/* Screen 2 - Computer attempts and user feedback  */
const GuessHintScreen = ({
    toBeGuessed, onGameOver, lastGuess, onLastGuess, range
}: {
    toBeGuessed: string,
    onGameOver: (guess: Guess) => void,
    lastGuess: Guess,
    onLastGuess: (lastGuess: Guess) => void
    range: number[]
}) => {
    const [guesses, setGuesses] = useState<Guess[]>([]);
    const [floor, setFloor] = useState<number>(range[0]);
    const [ceil, setCeil] = useState<number>(range[1] + 1);
    const [alertModalData, setAlertModalData] = useState<AlertModalData>(
        {
          visible: false
        }
    );

    const itsLess = () => {
        const guess = guesses[guesses.length - 1];
        if (guess.number < floor) {
            return;
        }

        if (guess.number < parseInt(toBeGuessed)) {
            setAlertModalData({
                title: "Forgot the number you chose?",
                content: `${toBeGuessed} is not smaller than ${guess.number}`,
                visible: true
            });
            return;
        }

        if (guess) {
            setCeil(guess.number);
            guesser();
        }
    }

    const itsMore = () => {
        const guess = guesses[guesses.length - 1];

        if (guess.number > ceil) {
            return;
        }

        if (guess.number > parseInt(toBeGuessed)) {
            setAlertModalData({
                title: "Forgot the number you chose?",
                content: `${toBeGuessed} is not bigger than ${guess.number}`,
                visible: true
            });
            return;
        }

        if (guess) {
            setFloor(guess.number);
            guesser();
        }
    }

    const actions = [
        { title: "-", action: itsLess },
        { title: "+", action: itsMore }
    ];

    const guesser = () => {
        const randomNumber = Math.floor(
            Math.random() * (Math.floor(ceil) - Math.ceil(floor)) + floor
        );

        if (guesses.some(item => item.number === randomNumber)) {
            guesser();
            return;
        }

        if (randomNumber > parseInt(toBeGuessed)) {
            setCeil(randomNumber);
        } else {
            setFloor(randomNumber);
        }

        const guess =
            {
                count: guesses.length ? guesses[guesses.length - 1].count + 1 : 0,
                identifier: "Guess",
                number: randomNumber
            }

        setGuesses(prevGuess => [...prevGuess, guess]);
        onLastGuess(guess);
    }

    const gameOver = (guess: Guess) => {
        onGameOver(guess);
    }

    useEffect(() => {
        guesser();
    }, []);

    useEffect(() => {
        if (lastGuess.number === parseInt(toBeGuessed)) {
            gameOver(lastGuess);
        }
    }, [guesses]);

    return (
        <View style={styles.container}>
            <Header title="Computer's Guess"></Header>
            <View style={styles.lastGuessContainer}>
                <Text style={styles.lastGuess}>{lastGuess && lastGuess.number}</Text>
            </View>
            <View style={styles.enterNumber}>
                <Text style={styles.enterNumberLabel}>Higher or Lower?</Text>
                <Actions actions={actions}></Actions>
            </View>
            <GuessList data={guesses}></GuessList>
            {alertModalData.visible &&
             <AlertModal
                 title={alertModalData.title}
                 content={alertModalData.content}
                 visible={alertModalData.visible}
             ></AlertModal>}
        </View>
    );
}

export default GuessHintScreen;
