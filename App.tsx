import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

/* Screen 1 - User 1 chooses a number to be guessed by the computer */
const GameStartScreen = ({
    onToBeGuessedChoice
}: {
    onToBeGuessedChoice: (input: string) => void
}) => {
    const [input, setInput] = useState<string>('');

    const resetAction = () => {
        handleInputChange('');
    }
    
    const confirmAction = () => {
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
        <View>
            <Header title="Guess My Number"></Header>
            <View>
                <Text>Enter a Number</Text>
                <TextInput
                    keyboardType="number-pad"
                    onChangeText={handleInputChange}
                    value={input}>
                </TextInput>
            </View>
            <Actions actions={actions}></Actions>
        </View>
    );
}

const Header = ({ title }: { title: string }) => {
    return (
        <View>
            <Text>
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
        <View>
            {actions.map(action => {
                return (
                    <Button key={action.title}
                            title={action.title}
                            onPress={action.action}>
                    </Button>
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
        <Modal visible={isModalVisible}>
            <View>
                <Text>{title}</Text>
                <Text>{content}</Text>
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
    toBeGuessed, onGameOver, lastGuess, onLastGuess
}: {
    toBeGuessed: string,
    onGameOver: (guess: Guess) => void,
    lastGuess: Guess,
    onLastGuess: (lastGuess: Guess) => void
}) => {
    const [guesses, setGuesses] = useState<Guess[]>([]);
    const [floor, setFloor] = useState<number>(0);
    const [ceil, setCeil] = useState<number>(100);
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
        const randomNumber = Math.floor(Math.random() * (ceil - floor - 1) + floor + 1);
        const guess = 
            {
                count: guesses.length ? guesses[guesses.length - 1].count + 1 : 0,
                identifier: "Something...",
                number: randomNumber
            }

        setGuesses(prevGuess => [...prevGuess, guess]);
        onLastGuess(guess);
        if (randomNumber > parseInt(toBeGuessed)) {
            setCeil(randomNumber);
        } else {
            setFloor(randomNumber);
        }
    }

    const gameOver = (guess: Guess) => {
        onGameOver(guess);
    }

    useEffect(() => {
        guesser();
    }, []);

    useEffect(() => {
        if (lastGuess && lastGuess.number === parseInt(toBeGuessed)) {
            gameOver(lastGuess);
        }        
    }, [guesses]);

    
    return (
        <View>
            <Header title="Computer's Guess"></Header>
            <View>
                <Text>{lastGuess && lastGuess.number}</Text>
            </View>
            <View>
                <Text>Higher or LoweR?</Text>
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
        <View>
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
        <View>
            <Text>{guess.count}</Text>
            <Text>{guess.identifier}</Text>
            <Text>{guess.number}</Text>
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
        <View>
            <Header title="Game Over"></Header>
            <View>
                <Text>Image</Text>
            </View>
            <View>
                <Text>It took {lastGuess.count} attempts to guess the number {lastGuess.number}.</Text>
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
        if (lastGuess.count > 0 &&
            lastGuess.number === parseInt(toBeGuessed)) {
            setCurrentScreen('over');
        }
    }, [lastGuess]);

    const handleResetGame = () => {
        setToBeGuessed('');
        setCurrentScreen('start');
        setLastGuess(initialGuess);
    }

    return (
        <View>
            <StatusBar style="auto" />
            {currentScreen === 'init' &&
             <GameStartScreen
                 onToBeGuessedChoice={handleToBeGuessedChoice}
             ></GameStartScreen>}
            {currentScreen === 'play' &&
             <GuessHintScreen
                 toBeGuessed={toBeGuessed}
                 onGameOver={handleGameOver}
                 lastGuess={lastGuess}
                 onLastGuess={handleLastGuess}
             ></GuessHintScreen>}
            {currentScreen === 'over' &&
             <GameOverScreen
                 lastGuess={lastGuess}
                 onResetGame={handleResetGame}
             ></GameOverScreen>}
        </View>
    );
}

const styles = StyleSheet.create({});
