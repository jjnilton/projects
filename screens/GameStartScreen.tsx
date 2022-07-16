import { useState } from 'react';
import {
    Text,
    TextInput,
    View
} from 'react-native';
import Actions from '../components/Actions';
import AlertModal from '../components/AlertModal';
import Header from '../components/Header';
import styles from '../styles/styles';
import AlertModalData from '../types/AlertModalData';

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
    const [alertModalData, setAlertModalData] = useState<AlertModalData>({
        visible: false
    });

    const resetAction = () => {
        handleInputChange('');
    }

    const confirmAction = () => {
        if (parseInt(input) < min || parseInt(input) > max) {
            setAlertModalData({
                title: "Invalid number",
                content: `You must enter a number between ${min} and ${max}.`,
                visible: true
            });
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
                <Text style={styles.enterNumberLabel}>
                    Enter a Number between {min} and {max}
                </Text>
                <TextInput
                    style={styles.enterNumberInput}
                    keyboardType="number-pad"
                    onChangeText={handleInputChange}
                    value={input}>
                </TextInput>
                <Actions actions={actions}></Actions>
            </View>
            {alertModalData.visible &&
             <AlertModal visible={alertModalData.visible}
                         title={alertModalData.title}
                         content={alertModalData.content}
             ></AlertModal>}
        </View>
    );
}

export default GameStartScreen;
