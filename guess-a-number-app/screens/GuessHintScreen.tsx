import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Actions from '../components/Actions';
import AlertModal from '../components/AlertModal';
import GuessList from '../components/GuessList';
import Header from '../components/Header';
import AlertModalType from '../types/AlertModalType';
import Guess from '../types/Guess';

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

    const currentGuess = guesses[0] || floor;
    const lessOrMore = currentGuess.number < parseInt(toBeGuessed)
                                           ? 'bigger'
                                           : 'smaller';

    const toggleModal = () => {
        setAlertModalData(prevState => {
            return ({
                title: "Forgot the number you chose?",
                content: `${toBeGuessed} is ${lessOrMore} than ${currentGuess.number}`,
                visible: !prevState.visible,
                toggle: toggleModal
            });
        });
    }

    const [alertModalData, setAlertModalData] = useState<AlertModalType>({
        toggle: toggleModal
    });

    const itsLess = () => {
        if (currentGuess.number < parseInt(toBeGuessed)) {
            toggleModal();
            return;
        }

        if (currentGuess) {
            setCeil(currentGuess.number);
            guesser();
        }
    }

    const itsMore = () => {
        if (currentGuess.number > parseInt(toBeGuessed)) {
            toggleModal();
            return;
        }

        if (currentGuess) {
            setFloor(currentGuess.number);
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
                count: guesses.length + 1,
                identifier: "Guess",
                number: randomNumber
            }

        setGuesses(prevGuesses => [guess, ...prevGuesses]);
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
            <View style={styles.higherOrLower}>
                <Text style={styles.higherOrLowerLabel}>Higher or Lower?</Text>
                <Actions actions={actions}></Actions>
            </View>
            <GuessList data={guesses}></GuessList>
            {alertModalData.visible &&
             <AlertModal
                 title={alertModalData.title}
                 content={alertModalData.content}
                 visible={alertModalData.visible}
                 toggle={toggleModal}
             ></AlertModal>}
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
    higherOrLower: {
        backgroundColor: '#111',
        borderRadius: 10,
        padding: 10,
        textAlign: 'center',
        width: '100%',
    },
    higherOrLowerLabel: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default GuessHintScreen;
