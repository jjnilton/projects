import { useEffect, useState } from 'react';
import { Button, FlatList, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

/* Screen 1 - User 1 chooses a number to be guessed by the computer */
const GameStartScreen = ({
    onToBeGuessedChoice,
    range
}: {
    onToBeGuessedChoice: (input: string) => void,
    range: number[]
}) => {
    const [input, setInput] = useState<string>('');
    const min = range[0];
    const max = range[1];

    const resetAction = () => {
        handleInputChange('');
    }

    const confirmAction = () => {
        if (parseInt(input) < min || parseInt(input) > max) {
            return;
        }

        onToBeGuessedChoice(input);
    }

    const handleInputChange = (inputText: string) => {
        setInput(inputText);
    }

    const actions = [
        { title: "Reset", action: resetAction },
        { title: "Confirm", action: confirmAction }
    ];

    return (
        <View style={styles.container}>
            <Header title="Guess My Number"></Header>
            <View style={styles.enterNumber}>
                <Text style={styles.enterNumberLabel}>Enter a Number between {min} and {max}</Text>
                <TextInput
                    style={styles.enterNumberInput}
                    keyboardType="number-pad"
                    onChangeText={handleInputChange}
                    value={input}>
                </TextInput>
                <Actions actions={actions}></Actions>
            </View>
        </View>
    );
}

const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    );
}

type Action = {
    title: string;
    action: (...args: any[]) => any;
}

const Actions = ({ actions }: { actions: Action[] }) => {
    return (
        <View style={styles.actions}>
            {actions.map(action => {
                return (
                    <View key={action.title} style={styles.actionButton}>
                        <Button
                            title={action.title}
                            onPress={action.action}>
                        </Button>
                    </View>
            )}
            )}
        </View>
    );
}

const AlertModal = ({
    isModalVisible,
    toggleModal,
    title,
    content
}: {
    isModalVisible: boolean,
    toggleModal: () => void,
    title: string,
    content: string
}) => {
    return (
        <Modal visible={isModalVisible} transparent={true}>
            <View style={styles.alertModalBackdrop}></View>
            <View style={styles.alertModalContainer}>
                <Text style={styles.alertModalTitle}>{title}</Text>
                <Text style={styles.alertModalContent}>{content}</Text>
                <Button title="Ok" onPress={toggleModal}></Button>
            </View>
        </Modal>
    );
}

type AlertModalData = {
    title: string,
    content: string
}

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
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [alertModalData, setAlertModalData] = useState<AlertModalData>({ title: '', content: ''});

    const toggleModal = () => {
        setIsModalVisible(prevState => !prevState);
    }

    const itsLess = () => {
        const guess = guesses[guesses.length - 1];
        if (guess.number < floor) {
            return;
        }

        if (guess.number < parseInt(toBeGuessed)) {
            setAlertModalData({
                title: "Forgot the number you chose?",
                content: `${toBeGuessed} is not smaller than ${guess.number}`
            });
            toggleModal();
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
                content: `${toBeGuessed} is not bigger than ${guess.number}`
            });
            toggleModal();
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
        const randomNumber = Math.floor(Math.random() * (Math.floor(ceil) - Math.ceil(floor)) + floor);

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
            {isModalVisible &&
             <AlertModal isModalVisible={isModalVisible}
                         toggleModal={toggleModal}
                         title={alertModalData.title}
                         content={alertModalData.content}
             ></AlertModal>}
        </View>
    );
}

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

type Guess = {
    count: number;
    identifier: string;
    number: number;
}

const GuessListItem = ({ guess }: { guess: Guess }) => {
    return (
        <View style={styles.guessListItem}>
            <Text style={styles.guessListItemTextCount}>#{guess.count}</Text>
            <Text style={styles.guessListItemTextId}>{guess.identifier}</Text>
            <Text style={styles.guessListItemTextGuess}>{guess.number}</Text>
        </View>
    );
}

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
                <Image style={{width: 100, height: 100}} source={require('./assets/dice.png')}></Image>
            </View>
            <View style={styles.gameOverMsgContainer}>
                <Text style={styles.gameOverMsgText}>It took <Text style={{fontWeight: 'bold'}}>{lastGuess.count}</Text> attempts to guess the number <Text style={{fontWeight: 'bold'}}>{lastGuess.number}</Text>.</Text>
            </View>
            <Button title="Start New Game" onPress={onResetGame}></Button>
        </View>
    );
}

const initialGuess = { count: 0, identifier: '', number: 0 };

export default function App() {
    const [toBeGuessed, setToBeGuessed] = useState<string>('');
    const [currentScreen, setCurrentScreen] = useState<string>('init');
    const [lastGuess, setLastGuess] = useState<Guess>(initialGuess);
    const [range, setRange] = useState<number[]>([1, 100]);

    const handleToBeGuessedChoice = (toBeGuessedChoice: string): void => {
        setToBeGuessed(toBeGuessedChoice);
        setCurrentScreen('play');
    }

    const handleLastGuess = (lastGuess: Guess) => {
        setLastGuess(lastGuess);
    }

    const handleGameOver = (guess: Guess) => {
        setLastGuess(guess);
    }

    useEffect(() => {
        if (lastGuess.number === parseInt(toBeGuessed)) {
            setCurrentScreen('over');
        }
    }, [lastGuess]);

    const handleResetGame = () => {
        setToBeGuessed('');
        setCurrentScreen('init');
        setLastGuess(initialGuess);
    }

    return (
        <View style={{ flex: 1}}>
            {currentScreen === 'init' &&
             <GameStartScreen
                 onToBeGuessedChoice={handleToBeGuessedChoice}
                 range={range}
             ></GameStartScreen>}
            {currentScreen === 'play' &&
             <GuessHintScreen
                 toBeGuessed={toBeGuessed}
                 onGameOver={handleGameOver}
                 lastGuess={lastGuess}
                 onLastGuess={handleLastGuess}
                 range={range}
             ></GuessHintScreen>}
            {currentScreen === 'over' &&
             <GameOverScreen
                 lastGuess={lastGuess}
                 onResetGame={handleResetGame}
             ></GameOverScreen>}
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
