import { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import GuessHintScreen from './screens/GuessHintScreen';
import GameOverScreen from './screens/GameOverScreen';
import Guess from './types/Guess';

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
        <>
            <StatusBar></StatusBar>
            <View style={{ flex: 1 }}>
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
        </>
    );
}

